import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsDlpJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DlpProjectsLocationsDlpJobsListTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED",
    InspectJob = "INSPECT_JOB",
    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}
export declare class DlpProjectsLocationsDlpJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    locationId?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: DlpProjectsLocationsDlpJobsListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DlpProjectsLocationsDlpJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsDlpJobsListRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsDlpJobsListPathParams;
    queryParams: DlpProjectsLocationsDlpJobsListQueryParams;
    security: DlpProjectsLocationsDlpJobsListSecurity;
}
export declare class DlpProjectsLocationsDlpJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListDlpJobsResponse?: shared.GooglePrivacyDlpV2ListDlpJobsResponse;
    statusCode: number;
}
