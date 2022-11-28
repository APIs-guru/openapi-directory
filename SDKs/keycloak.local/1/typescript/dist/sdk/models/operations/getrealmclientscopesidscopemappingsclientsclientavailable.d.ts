import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsClientsClientAvailablePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsClientsClientAvailablePathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
