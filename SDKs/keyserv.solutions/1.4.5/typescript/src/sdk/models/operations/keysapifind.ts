import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeysApiFindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiFindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeysApiFindPathParams;
}


export class KeysApiFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keysApiFind200ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
