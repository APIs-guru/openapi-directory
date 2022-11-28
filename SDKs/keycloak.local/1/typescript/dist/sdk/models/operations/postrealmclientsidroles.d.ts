import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdRolesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdRolesRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdRolesPathParams;
    request: shared.RoleRepresentation;
}
export declare class PostRealmClientsIdRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
