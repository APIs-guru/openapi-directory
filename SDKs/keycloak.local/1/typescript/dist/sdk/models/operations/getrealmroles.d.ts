import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmRolesQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    search?: string;
}
export declare class GetRealmRolesRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesPathParams;
    queryParams: GetRealmRolesQueryParams;
}
export declare class GetRealmRolesResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
