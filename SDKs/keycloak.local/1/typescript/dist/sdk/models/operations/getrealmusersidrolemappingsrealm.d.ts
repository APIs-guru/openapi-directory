import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsRealmPathParams;
}
export declare class GetRealmUsersIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
