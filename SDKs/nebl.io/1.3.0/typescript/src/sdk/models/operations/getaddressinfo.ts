import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAddressInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressInfoPathParams;
}


export class GetAddressInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressInfoResponse?: shared.GetAddressInfoResponse;
}
