import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;
}


export class PreprintsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintsReadPathParams;
}


export class PreprintsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
