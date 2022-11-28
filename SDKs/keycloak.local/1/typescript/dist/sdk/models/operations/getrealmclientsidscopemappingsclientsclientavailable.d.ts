import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
