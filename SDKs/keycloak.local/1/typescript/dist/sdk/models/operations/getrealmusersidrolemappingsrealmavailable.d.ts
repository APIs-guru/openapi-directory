import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsRealmAvailablePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsRealmAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsRealmAvailablePathParams;
}
export declare class GetRealmUsersIdRoleMappingsRealmAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
