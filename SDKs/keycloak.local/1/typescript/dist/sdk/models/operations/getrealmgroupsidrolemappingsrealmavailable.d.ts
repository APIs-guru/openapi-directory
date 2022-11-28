import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsRealmAvailablePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsRealmAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsRealmAvailablePathParams;
}
export declare class GetRealmGroupsIdRoleMappingsRealmAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
