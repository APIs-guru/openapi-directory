import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams extends SpeakeasyBase {
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
export declare class IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest extends SpeakeasyBase {
    pathParams: IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams;
    queryParams: IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams;
    request?: Map<string, any>;
    security: IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse extends SpeakeasyBase {
    contentType: string;
    identityAwareProxyClient?: shared.IdentityAwareProxyClient;
    statusCode: number;
}
