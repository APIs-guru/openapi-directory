import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdScopeMappingsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdScopeMappingsPathParams;
}
export declare class GetRealmClientsIdScopeMappingsResponse extends SpeakeasyBase {
    contentType: string;
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
}
