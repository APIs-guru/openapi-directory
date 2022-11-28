import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsRealmPathParams;
}
export declare class GetRealmGroupsIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
