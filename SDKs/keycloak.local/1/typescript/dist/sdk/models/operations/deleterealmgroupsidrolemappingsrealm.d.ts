import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmGroupsIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class DeleteRealmGroupsIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: DeleteRealmGroupsIdRoleMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmGroupsIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
