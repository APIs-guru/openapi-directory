import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeysApiExpiryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiExpiryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeysApiExpiryPathParams;
}


export class KeysApiExpiryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keysApiExpiry200ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
