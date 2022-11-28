import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdRolesQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    search?: string;
}
export declare class GetRealmClientsIdRolesRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesPathParams;
    queryParams: GetRealmClientsIdRolesQueryParams;
}
export declare class GetRealmClientsIdRolesResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
