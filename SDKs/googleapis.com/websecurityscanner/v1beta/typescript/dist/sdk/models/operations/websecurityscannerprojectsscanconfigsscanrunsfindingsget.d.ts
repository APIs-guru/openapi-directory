import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams;
    security: WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
}
