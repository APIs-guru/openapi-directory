import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsRealmAvailablePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsRealmAvailablePathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
