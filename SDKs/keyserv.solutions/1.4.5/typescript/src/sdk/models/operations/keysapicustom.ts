import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeysApiCustomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class KeysApiCustomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeysApiCustomPathParams;
}


export class KeysApiCustomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysApiCustom200ApplicationOctetStreamBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
