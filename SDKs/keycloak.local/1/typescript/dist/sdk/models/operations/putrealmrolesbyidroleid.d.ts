import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class PutRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
    pathParams: PutRealmRolesByIdRoleIdPathParams;
    request: shared.RoleRepresentation;
}
export declare class PutRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
