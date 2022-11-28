import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJobsIdCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJobsIdCancelPathParams;
}


export class PostJobsIdCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postJobsIdCancel200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
