import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsRealmCompositePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsRealmCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsRealmCompositePathParams;
}
export declare class GetRealmGroupsIdRoleMappingsRealmCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
