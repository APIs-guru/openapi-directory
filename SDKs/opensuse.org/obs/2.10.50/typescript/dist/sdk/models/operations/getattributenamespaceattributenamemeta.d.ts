import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
    attributeName: string;
    namespace: string;
}
export declare class GetAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
    pathParams: GetAttributeNamespaceAttributeNameMetaPathParams;
    security: GetAttributeNamespaceAttributeNameMetaSecurity;
}
export declare class GetAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
