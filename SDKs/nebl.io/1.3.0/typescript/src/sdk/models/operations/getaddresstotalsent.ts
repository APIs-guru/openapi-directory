import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressTotalSentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressTotalSentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressTotalSentPathParams;
}


export class GetAddressTotalSentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressTotalSentResponse?: number;
}
