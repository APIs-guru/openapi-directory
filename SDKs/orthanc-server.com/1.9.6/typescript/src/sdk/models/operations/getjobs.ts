import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJobsQueryParams;
}


export class GetJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJobs200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
