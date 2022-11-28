import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmGroupsIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class DeleteRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: DeleteRealmGroupsIdRoleMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
