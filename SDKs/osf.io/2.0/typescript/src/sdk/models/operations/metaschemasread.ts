import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetaschemasReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metaschema_id" })
  metaschemaId: string;
}


export class MetaschemasReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MetaschemasReadPathParams;
}


export class MetaschemasReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
