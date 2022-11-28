import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsClientsClientAvailablePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsClientsClientAvailablePathParams;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
