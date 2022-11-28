import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams extends SpeakeasyBase {
    id: string;
    protocol: string;
    realm: string;
}
export declare class GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams;
}
export declare class GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
    contentType: string;
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
}
