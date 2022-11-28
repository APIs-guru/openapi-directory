import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsRealmPathParams;
}
export declare class GetRealmClientsIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
