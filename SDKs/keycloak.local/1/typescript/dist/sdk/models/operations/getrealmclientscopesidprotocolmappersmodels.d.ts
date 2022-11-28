import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdProtocolMappersModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdProtocolMappersModelsPathParams;
}
export declare class GetRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
}
