import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsGetPathParams extends SpeakeasyBase {
    profileId: string;
    reportId: string;
}
export declare class DfareportingReportsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsGetPathParams;
    queryParams: DfareportingReportsGetQueryParams;
    security: DfareportingReportsGetSecurity;
}
export declare class DfareportingReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
