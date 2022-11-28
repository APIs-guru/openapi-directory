import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryJobResultsForProjectPathParams extends SpeakeasyBase {
    projectId: string;
    queryjobId: string;
}
export declare class GetQueryJobResultsForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    nofilter?: boolean;
    start?: number;
}
export declare class GetQueryJobResultsForProjectSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetQueryJobResultsForProjectRequest extends SpeakeasyBase {
    pathParams: GetQueryJobResultsForProjectPathParams;
    queryParams: GetQueryJobResultsForProjectQueryParams;
    security: GetQueryJobResultsForProjectSecurity;
}
export declare class GetQueryJobResultsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    queryjobProjectResults?: shared.QueryjobProjectResults;
}
