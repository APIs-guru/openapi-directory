import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebsecurityscannerProjectsScanConfigsDeleteQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsDeleteRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsDeletePathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsDeleteQueryParams;
    security: WebsecurityscannerProjectsScanConfigsDeleteSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
