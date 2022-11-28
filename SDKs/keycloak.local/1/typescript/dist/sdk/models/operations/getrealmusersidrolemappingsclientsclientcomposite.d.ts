import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsClientsClientCompositePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsClientsClientCompositePathParams;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
