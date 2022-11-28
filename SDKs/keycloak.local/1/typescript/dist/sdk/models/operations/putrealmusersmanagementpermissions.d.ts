import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmUsersManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PutRealmUsersManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmUsersManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmUsersManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
