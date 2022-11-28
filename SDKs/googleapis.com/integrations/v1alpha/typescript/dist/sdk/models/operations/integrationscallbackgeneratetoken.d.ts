import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IntegrationsCallbackGenerateTokenProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT",
    Ip = "IP",
    Apigee = "APIGEE",
    Security = "SECURITY"
}
export declare class IntegrationsCallbackGenerateTokenQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    code?: string;
    fields?: string;
    gcpProjectId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    product?: IntegrationsCallbackGenerateTokenProductEnum;
    quotaUser?: string;
    redirectUri?: string;
    state?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsCallbackGenerateTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsCallbackGenerateTokenRequest extends SpeakeasyBase {
    queryParams: IntegrationsCallbackGenerateTokenQueryParams;
    security: IntegrationsCallbackGenerateTokenSecurity;
}
export declare class IntegrationsCallbackGenerateTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaGenerateTokenResponse?: shared.GoogleCloudIntegrationsV1alphaGenerateTokenResponse;
    statusCode: number;
}
