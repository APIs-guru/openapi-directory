import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdProtocolMappersProtocolProtocolPathParams extends SpeakeasyBase {
    id: string;
    protocol: string;
    realm: string;
}
export declare class GetRealmClientsIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdProtocolMappersProtocolProtocolPathParams;
}
export declare class GetRealmClientsIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
    contentType: string;
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
}
