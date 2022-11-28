import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchAnythingAnythingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class PatchAnythingAnythingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAnythingAnythingPathParams;
}


export class PatchAnythingAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
