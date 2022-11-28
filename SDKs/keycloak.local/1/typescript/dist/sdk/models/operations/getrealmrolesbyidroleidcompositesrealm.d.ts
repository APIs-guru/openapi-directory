import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesByIdRoleIdCompositesRealmPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesByIdRoleIdCompositesRealmPathParams;
}
export declare class GetRealmRolesByIdRoleIdCompositesRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
