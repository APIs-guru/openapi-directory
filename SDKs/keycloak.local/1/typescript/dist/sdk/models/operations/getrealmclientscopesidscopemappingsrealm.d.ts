import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsRealmPathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
