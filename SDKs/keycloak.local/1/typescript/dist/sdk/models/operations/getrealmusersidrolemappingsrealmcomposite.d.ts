import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsRealmCompositePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsRealmCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsRealmCompositePathParams;
}
export declare class GetRealmUsersIdRoleMappingsRealmCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
