import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetJobsQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetJobsRequest extends SpeakeasyBase {
    queryParams: GetJobsQueryParams;
}
export declare class GetJobsResponse extends SpeakeasyBase {
    contentType: string;
    getJobs200ApplicationJsonAny?: any;
    statusCode: number;
}
