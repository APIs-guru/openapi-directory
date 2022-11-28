import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientsId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
    id1: string;
    id2: string;
    realm: string;
}
export declare class PutRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
    pathParams: PutRealmClientsId1ProtocolMappersModelsId2PathParams;
    request: shared.ProtocolMapperRepresentation;
}
export declare class PutRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
