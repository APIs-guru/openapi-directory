import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
