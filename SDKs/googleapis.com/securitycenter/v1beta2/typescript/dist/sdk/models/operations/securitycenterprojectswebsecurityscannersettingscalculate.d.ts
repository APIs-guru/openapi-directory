import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams;
    queryParams: SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams;
    security: SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity;
}
export declare class SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webSecurityScannerSettings?: shared.WebSecurityScannerSettings;
}
