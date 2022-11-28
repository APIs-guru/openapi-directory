import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebsecurityscannerProjectsScanConfigsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WebsecurityscannerProjectsScanConfigsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsPatchRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsPatchPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsPatchQueryParams;
    request?: shared.ScanConfig;
    security: WebsecurityscannerProjectsScanConfigsPatchSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsPatchResponse extends SpeakeasyBase {
    contentType: string;
    scanConfig?: shared.ScanConfig;
    statusCode: number;
}
