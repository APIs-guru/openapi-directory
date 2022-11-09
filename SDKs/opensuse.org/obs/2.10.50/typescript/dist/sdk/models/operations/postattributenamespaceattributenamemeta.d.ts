import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
    attributeName: string;
    namespace: string;
}
export declare class PostAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
    pathParams: PostAttributeNamespaceAttributeNameMetaPathParams;
    request: Uint8Array;
    security: PostAttributeNamespaceAttributeNameMetaSecurity;
}
export declare class PostAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
