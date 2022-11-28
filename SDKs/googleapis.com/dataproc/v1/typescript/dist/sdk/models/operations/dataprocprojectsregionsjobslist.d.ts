import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsListPathParams extends SpeakeasyBase {
    projectId: string;
    region: string;
}
export declare enum DataprocProjectsRegionsJobsListJobStateMatcherEnum {
    All = "ALL",
    Active = "ACTIVE",
    NonActive = "NON_ACTIVE"
}
export declare class DataprocProjectsRegionsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clusterName?: string;
    fields?: string;
    filter?: string;
    jobStateMatcher?: DataprocProjectsRegionsJobsListJobStateMatcherEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsListRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsListPathParams;
    queryParams: DataprocProjectsRegionsJobsListQueryParams;
    security: DataprocProjectsRegionsJobsListSecurity;
}
export declare class DataprocProjectsRegionsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
