import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdScopeMappingsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdScopeMappingsPathParams;
}
export declare class GetRealmClientScopesIdScopeMappingsResponse extends SpeakeasyBase {
    contentType: string;
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
}
