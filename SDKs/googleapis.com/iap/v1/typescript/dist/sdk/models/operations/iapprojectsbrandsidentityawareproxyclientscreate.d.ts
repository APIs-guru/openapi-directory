import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsCreateQueryParams extends SpeakeasyBase {
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
export declare class IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsCreateRequest extends SpeakeasyBase {
    pathParams: IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams;
    queryParams: IapProjectsBrandsIdentityAwareProxyClientsCreateQueryParams;
    request?: shared.IdentityAwareProxyClientInput;
    security: IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsCreateResponse extends SpeakeasyBase {
    contentType: string;
    identityAwareProxyClient?: shared.IdentityAwareProxyClient;
    statusCode: number;
}
