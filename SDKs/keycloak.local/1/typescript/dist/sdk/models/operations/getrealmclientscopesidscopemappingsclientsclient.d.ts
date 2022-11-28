import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsClientsClientPathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
