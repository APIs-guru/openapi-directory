import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdProtocolMappersModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdProtocolMappersModelsPathParams;
    request: shared.ProtocolMapperRepresentation;
}
export declare class PostRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
