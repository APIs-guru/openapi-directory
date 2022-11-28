import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesByIdRoleIdPathParams;
}
export declare class GetRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
}
