import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmAuthenticationFormActionProvidersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationFormActionProvidersRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationFormActionProvidersPathParams;
}
export declare class GetRealmAuthenticationFormActionProvidersResponse extends SpeakeasyBase {
    contentType: string;
    getRealmAuthenticationFormActionProviders2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}
