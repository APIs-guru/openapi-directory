import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdManagementPermissionsPathParams;
}
export declare class GetRealmGroupsIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
