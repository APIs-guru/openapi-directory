import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmIdentityProviderInstancesAliasExportPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasExportQueryParams extends SpeakeasyBase {
    format?: string;
}
export declare class GetRealmIdentityProviderInstancesAliasExportRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesAliasExportPathParams;
    queryParams: GetRealmIdentityProviderInstancesAliasExportQueryParams;
}
export declare class GetRealmIdentityProviderInstancesAliasExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
