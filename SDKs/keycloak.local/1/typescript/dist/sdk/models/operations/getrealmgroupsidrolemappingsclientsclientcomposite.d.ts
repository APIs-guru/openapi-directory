import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsClientsClientCompositePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsClientsClientCompositePathParams;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
