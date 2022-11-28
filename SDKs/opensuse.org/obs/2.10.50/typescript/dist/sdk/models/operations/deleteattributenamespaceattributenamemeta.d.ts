import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
    attributeName: string;
    namespace: string;
}
export declare class DeleteAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
    pathParams: DeleteAttributeNamespaceAttributeNameMetaPathParams;
    security: DeleteAttributeNamespaceAttributeNameMetaSecurity;
}
export declare class DeleteAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
