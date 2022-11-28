import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdProtocolMappersModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdProtocolMappersModelsPathParams;
}
export declare class GetRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
}
