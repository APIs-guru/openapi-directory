import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmAuthenticationAuthenticatorProvidersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationAuthenticatorProvidersRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationAuthenticatorProvidersPathParams;
}
export declare class GetRealmAuthenticationAuthenticatorProvidersResponse extends SpeakeasyBase {
    contentType: string;
    getRealmAuthenticationAuthenticatorProviders2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}
