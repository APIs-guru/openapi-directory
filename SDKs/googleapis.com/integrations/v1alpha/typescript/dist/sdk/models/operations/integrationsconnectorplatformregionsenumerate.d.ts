import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsConnectorPlatformRegionsEnumerateQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsConnectorPlatformRegionsEnumerateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsConnectorPlatformRegionsEnumerateRequest extends SpeakeasyBase {
    queryParams: IntegrationsConnectorPlatformRegionsEnumerateQueryParams;
    security: IntegrationsConnectorPlatformRegionsEnumerateSecurity;
}
export declare class IntegrationsConnectorPlatformRegionsEnumerateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse?: shared.GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse;
    statusCode: number;
}
