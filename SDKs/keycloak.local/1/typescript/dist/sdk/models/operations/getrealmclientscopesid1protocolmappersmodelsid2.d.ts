import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
    id1: string;
    id2: string;
    realm: string;
}
export declare class GetRealmClientScopesId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
    pathParams: GetRealmClientScopesId1ProtocolMappersModelsId2PathParams;
}
export declare class GetRealmClientScopesId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
    contentType: string;
    protocolMapperRepresentation?: shared.ProtocolMapperRepresentation;
    statusCode: number;
}
