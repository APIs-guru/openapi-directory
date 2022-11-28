import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmAuthenticationClientAuthenticatorProvidersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationClientAuthenticatorProvidersRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationClientAuthenticatorProvidersPathParams;
}
export declare class GetRealmAuthenticationClientAuthenticatorProvidersResponse extends SpeakeasyBase {
    contentType: string;
    getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}
