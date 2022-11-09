import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJobsIdResubmitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdResubmitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostJobsIdResubmitPathParams;
}


export class PostJobsIdResubmitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postJobsIdResubmit200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
