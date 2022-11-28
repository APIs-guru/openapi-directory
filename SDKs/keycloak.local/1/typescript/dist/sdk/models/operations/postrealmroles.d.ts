import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmRolesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmRolesRequest extends SpeakeasyBase {
    pathParams: PostRealmRolesPathParams;
    request: shared.RoleRepresentation;
}
export declare class PostRealmRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
