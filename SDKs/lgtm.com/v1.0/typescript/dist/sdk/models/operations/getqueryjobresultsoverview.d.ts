import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryJobResultsOverviewPathParams extends SpeakeasyBase {
    queryjobId: string;
}
export declare class GetQueryJobResultsOverviewQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    start?: string;
}
export declare class GetQueryJobResultsOverviewSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetQueryJobResultsOverviewRequest extends SpeakeasyBase {
    pathParams: GetQueryJobResultsOverviewPathParams;
    queryParams: GetQueryJobResultsOverviewQueryParams;
    security: GetQueryJobResultsOverviewSecurity;
}
export declare class GetQueryJobResultsOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    queryjobResultsOverview?: shared.QueryjobResultsOverview;
}
