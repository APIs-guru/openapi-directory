import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsClientsClientPathParams;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
