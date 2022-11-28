import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressTotalSentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressTotalSentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressTotalSentPathParams;
}


export class GetAddressTotalSentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressTotalSentResponse?: number;
}
