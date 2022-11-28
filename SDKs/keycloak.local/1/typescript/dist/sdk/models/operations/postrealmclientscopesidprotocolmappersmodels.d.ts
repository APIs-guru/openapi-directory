import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientScopesIdProtocolMappersModelsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
    pathParams: PostRealmClientScopesIdProtocolMappersModelsPathParams;
    request: shared.ProtocolMapperRepresentation;
}
export declare class PostRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
