import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmUsersManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersManagementPermissionsPathParams;
}
export declare class GetRealmUsersManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
