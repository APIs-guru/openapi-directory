import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaschemasReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metaschema_id" })
  metaschemaId: string;
}


export class MetaschemasReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MetaschemasReadPathParams;
}


export class MetaschemasReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
