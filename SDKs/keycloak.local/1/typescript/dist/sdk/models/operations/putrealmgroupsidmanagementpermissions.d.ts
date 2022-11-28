import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmGroupsIdManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmGroupsIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmGroupsIdManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmGroupsIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
