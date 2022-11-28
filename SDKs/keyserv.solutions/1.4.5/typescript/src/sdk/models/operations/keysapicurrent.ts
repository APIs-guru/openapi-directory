import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeysApiCurrentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeysApiCurrentPathParams;
}


export class KeysApiCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysApiCurrent200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
