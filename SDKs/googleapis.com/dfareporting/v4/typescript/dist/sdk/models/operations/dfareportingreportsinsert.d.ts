import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingReportsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsInsertPathParams;
    queryParams: DfareportingReportsInsertQueryParams;
    request?: shared.Report;
    security: DfareportingReportsInsertSecurity;
}
export declare class DfareportingReportsInsertResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
