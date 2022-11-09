import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJobsIdResumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdResumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostJobsIdResumePathParams;
}


export class PostJobsIdResumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postJobsIdResume200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
