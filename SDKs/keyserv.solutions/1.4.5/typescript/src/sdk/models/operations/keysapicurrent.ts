import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeysApiCurrentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiCurrentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeysApiCurrentPathParams;
}


export class KeysApiCurrentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keysApiCurrent200ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
