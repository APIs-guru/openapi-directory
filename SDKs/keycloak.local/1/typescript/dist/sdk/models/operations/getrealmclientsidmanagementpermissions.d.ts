import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdManagementPermissionsPathParams;
}
export declare class GetRealmClientsIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
