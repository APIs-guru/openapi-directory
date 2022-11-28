import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsDeletePathParams extends SpeakeasyBase {
    profileId: string;
    reportId: string;
}
export declare class DfareportingReportsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsDeletePathParams;
    queryParams: DfareportingReportsDeleteQueryParams;
    security: DfareportingReportsDeleteSecurity;
}
export declare class DfareportingReportsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
