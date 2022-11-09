import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class PatchAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAnythingAnythingPathParams;
}


export class PatchAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
