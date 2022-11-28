import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressPathParams;
}


export class TestnetGetAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressResponse?: shared.GetAddressResponse;
}
