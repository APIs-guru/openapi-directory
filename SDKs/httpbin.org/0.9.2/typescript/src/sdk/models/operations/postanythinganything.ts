import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class PostAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAnythingAnythingPathParams;
}


export class PostAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
