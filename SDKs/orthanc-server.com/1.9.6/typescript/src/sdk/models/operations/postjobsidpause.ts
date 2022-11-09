import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJobsIdPausePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdPauseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostJobsIdPausePathParams;
}


export class PostJobsIdPauseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postJobsIdPause200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
