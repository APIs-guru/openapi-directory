import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsStartPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebsecurityscannerProjectsScanConfigsStartQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsStartRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsStartPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsStartQueryParams;
    request?: Map<string, any>;
    security: WebsecurityscannerProjectsScanConfigsStartSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsStartResponse extends SpeakeasyBase {
    contentType: string;
    scanRun?: shared.ScanRun;
    statusCode: number;
}
