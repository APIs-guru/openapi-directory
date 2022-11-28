import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesByIdRoleIdCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesByIdRoleIdCompositesPathParams;
}
export declare class GetRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
