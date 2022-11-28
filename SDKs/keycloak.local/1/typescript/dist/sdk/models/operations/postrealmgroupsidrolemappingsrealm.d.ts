import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmGroupsIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmGroupsIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: PostRealmGroupsIdRoleMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmGroupsIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
