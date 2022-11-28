import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeysApiFindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeysApiFindPathParams;
}


export class KeysApiFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysApiFind200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
