import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJobsIdResumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdResumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJobsIdResumePathParams;
}


export class PostJobsIdResumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postJobsIdResume200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
