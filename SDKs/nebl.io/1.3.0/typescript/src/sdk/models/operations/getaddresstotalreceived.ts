import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressTotalReceivedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressTotalReceivedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressTotalReceivedPathParams;
}


export class GetAddressTotalReceivedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressTotalReceivedResponse?: number;
}
