import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CitationsStylesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class CitationsStylesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CitationsStylesReadPathParams;
}


export class CitationsStylesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
