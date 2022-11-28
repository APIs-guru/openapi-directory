import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsStopRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams;
    request?: Map<string, any>;
    security: WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsStopResponse extends SpeakeasyBase {
    contentType: string;
    scanRun?: shared.ScanRun;
    statusCode: number;
}
