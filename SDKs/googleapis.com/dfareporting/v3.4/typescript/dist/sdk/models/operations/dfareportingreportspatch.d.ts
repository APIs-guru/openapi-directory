import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsPatchPathParams extends SpeakeasyBase {
    profileId: string;
    reportId: string;
}
export declare class DfareportingReportsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingReportsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsPatchPathParams;
    queryParams: DfareportingReportsPatchQueryParams;
    request?: shared.Report;
    security: DfareportingReportsPatchSecurity;
}
export declare class DfareportingReportsPatchResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
