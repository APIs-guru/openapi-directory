import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmRolesByIdRoleIdCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class DeleteRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
    pathParams: DeleteRealmRolesByIdRoleIdCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
