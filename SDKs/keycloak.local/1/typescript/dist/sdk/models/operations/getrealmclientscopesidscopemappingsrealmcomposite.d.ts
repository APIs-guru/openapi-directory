import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsRealmCompositePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmCompositeRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsRealmCompositePathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmCompositeResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
