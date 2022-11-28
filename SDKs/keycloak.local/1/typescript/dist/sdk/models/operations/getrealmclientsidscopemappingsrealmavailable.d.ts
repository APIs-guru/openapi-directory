import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsRealmAvailablePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsRealmAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsRealmAvailablePathParams;
}
export declare class GetRealmClientsIdScopeMappingsRealmAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
