import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJobsIdCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostJobsIdCancelPathParams;
}


export class PostJobsIdCancelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postJobsIdCancel200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
