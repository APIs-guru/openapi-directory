import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintsCitationReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class PreprintsCitationReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintsCitationReadPathParams;
}


export class PreprintsCitationReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
