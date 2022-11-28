import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientsIdManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmClientsIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmClientsIdManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmClientsIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
