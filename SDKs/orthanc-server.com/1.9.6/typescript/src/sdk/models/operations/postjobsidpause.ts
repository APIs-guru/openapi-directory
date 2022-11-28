import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJobsIdPausePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdPauseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJobsIdPausePathParams;
}


export class PostJobsIdPauseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postJobsIdPause200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
