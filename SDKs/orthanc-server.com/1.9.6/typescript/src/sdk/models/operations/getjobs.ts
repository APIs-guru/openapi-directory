import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetJobsQueryParams;
}


export class GetJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getJobs200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
