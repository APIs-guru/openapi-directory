import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebsecurityscannerProjectsScanConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsCreateRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsCreatePathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsCreateQueryParams;
    request?: shared.ScanConfig;
    security: WebsecurityscannerProjectsScanConfigsCreateSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    scanConfig?: shared.ScanConfig;
    statusCode: number;
}
