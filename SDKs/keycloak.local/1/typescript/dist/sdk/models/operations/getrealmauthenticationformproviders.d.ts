import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmAuthenticationFormProvidersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationFormProvidersRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationFormProvidersPathParams;
}
export declare class GetRealmAuthenticationFormProvidersResponse extends SpeakeasyBase {
    contentType: string;
    getRealmAuthenticationFormProviders2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}
