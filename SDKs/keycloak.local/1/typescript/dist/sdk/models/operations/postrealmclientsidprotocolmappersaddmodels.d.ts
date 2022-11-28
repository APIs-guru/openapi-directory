import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdProtocolMappersAddModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdProtocolMappersAddModelsRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdProtocolMappersAddModelsPathParams;
    request: shared.ProtocolMapperRepresentation[];
}
export declare class PostRealmClientsIdProtocolMappersAddModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
