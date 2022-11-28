import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
    reportId: string;
}
export declare class DfareportingReportsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsUpdatePathParams;
    queryParams: DfareportingReportsUpdateQueryParams;
    request?: shared.Report;
    security: DfareportingReportsUpdateSecurity;
}
export declare class DfareportingReportsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
