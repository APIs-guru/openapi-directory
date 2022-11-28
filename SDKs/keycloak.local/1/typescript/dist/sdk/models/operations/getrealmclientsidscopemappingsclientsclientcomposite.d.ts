import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsClientsClientCompositePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsClientsClientCompositePathParams;
}
export declare class GetRealmClientsIdScopeMappingsClientsClientCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
