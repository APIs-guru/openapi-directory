import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsClientsClientCompositePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsClientsClientCompositePathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
