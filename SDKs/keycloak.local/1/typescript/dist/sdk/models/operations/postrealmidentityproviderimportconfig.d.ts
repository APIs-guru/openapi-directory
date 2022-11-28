import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRealmIdentityProviderImportConfigPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmIdentityProviderImportConfigRequest extends SpeakeasyBase {
    pathParams: PostRealmIdentityProviderImportConfigPathParams;
}
export declare class PostRealmIdentityProviderImportConfigResponse extends SpeakeasyBase {
    contentType: string;
    postRealmIdentityProviderImportConfig2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
