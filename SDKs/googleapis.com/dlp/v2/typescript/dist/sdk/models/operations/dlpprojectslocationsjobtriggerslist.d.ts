import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsJobTriggersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DlpProjectsLocationsJobTriggersListTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED",
    InspectJob = "INSPECT_JOB",
    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}
export declare class DlpProjectsLocationsJobTriggersListQueryParams extends SpeakeasyBase {
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
    type?: DlpProjectsLocationsJobTriggersListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DlpProjectsLocationsJobTriggersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsJobTriggersListRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsJobTriggersListPathParams;
    queryParams: DlpProjectsLocationsJobTriggersListQueryParams;
    security: DlpProjectsLocationsJobTriggersListSecurity;
}
export declare class DlpProjectsLocationsJobTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListJobTriggersResponse?: shared.GooglePrivacyDlpV2ListJobTriggersResponse;
    statusCode: number;
}
