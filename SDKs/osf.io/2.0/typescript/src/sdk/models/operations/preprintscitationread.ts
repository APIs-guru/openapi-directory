import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintsCitationReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class PreprintsCitationReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintsCitationReadPathParams;
}


export class PreprintsCitationReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
