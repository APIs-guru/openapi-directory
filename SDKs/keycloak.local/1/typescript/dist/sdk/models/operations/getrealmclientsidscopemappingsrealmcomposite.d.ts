import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsRealmCompositePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsRealmCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsRealmCompositePathParams;
}
export declare class GetRealmClientsIdScopeMappingsRealmCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
