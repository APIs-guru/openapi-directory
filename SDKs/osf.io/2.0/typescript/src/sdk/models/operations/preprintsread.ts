import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;
}


export class PreprintsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintsReadPathParams;
}


export class PreprintsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
