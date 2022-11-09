import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressTotalReceivedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressTotalReceivedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressTotalReceivedPathParams;
}


export class GetAddressTotalReceivedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressTotalReceivedResponse?: number;
}
