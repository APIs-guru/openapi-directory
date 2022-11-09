import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeysApiCustomPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiCustomRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeysApiCustomPathParams;
}


export class KeysApiCustomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keysApiCustom200ApplicationOctetStreamBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
