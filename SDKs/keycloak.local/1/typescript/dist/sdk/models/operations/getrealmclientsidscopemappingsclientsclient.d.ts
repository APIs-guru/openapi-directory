import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsClientsClientPathParams;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
