import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientScopesIdProtocolMappersAddModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientScopesIdProtocolMappersAddModelsRequest extends SpeakeasyBase {
    pathParams: PostRealmClientScopesIdProtocolMappersAddModelsPathParams;
    request: shared.ProtocolMapperRepresentation[];
}
export declare class PostRealmClientScopesIdProtocolMappersAddModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
