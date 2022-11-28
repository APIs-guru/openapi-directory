import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeysApiExpiryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiExpiryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeysApiExpiryPathParams;
}


export class KeysApiExpiryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysApiExpiry200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
