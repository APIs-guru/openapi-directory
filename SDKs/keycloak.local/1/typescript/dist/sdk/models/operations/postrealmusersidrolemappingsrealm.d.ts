import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUsersIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmUsersIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: PostRealmUsersIdRoleMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmUsersIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
