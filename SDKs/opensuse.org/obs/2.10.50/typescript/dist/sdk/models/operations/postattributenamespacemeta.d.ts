import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAttributeNamespaceMetaPathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class PostAttributeNamespaceMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostAttributeNamespaceMetaRequest extends SpeakeasyBase {
    pathParams: PostAttributeNamespaceMetaPathParams;
    request: Uint8Array;
    security: PostAttributeNamespaceMetaSecurity;
}
export declare class PostAttributeNamespaceMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
