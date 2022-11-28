import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CitationsStylesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class CitationsStylesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CitationsStylesReadPathParams;
}


export class CitationsStylesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
