import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class DeleteAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnythingAnythingPathParams;
}


export class DeleteAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
