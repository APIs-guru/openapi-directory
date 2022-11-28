import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams;
}
export declare class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
