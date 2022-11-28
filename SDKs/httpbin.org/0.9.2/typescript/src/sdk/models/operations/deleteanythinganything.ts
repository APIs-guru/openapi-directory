import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAnythingAnythingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class DeleteAnythingAnythingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnythingAnythingPathParams;
}


export class DeleteAnythingAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
