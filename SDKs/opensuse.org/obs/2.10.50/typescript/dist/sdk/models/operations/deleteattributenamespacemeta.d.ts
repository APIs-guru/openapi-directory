import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAttributeNamespaceMetaPathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class DeleteAttributeNamespaceMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteAttributeNamespaceMetaRequest extends SpeakeasyBase {
    pathParams: DeleteAttributeNamespaceMetaPathParams;
    security: DeleteAttributeNamespaceMetaSecurity;
}
export declare class DeleteAttributeNamespaceMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
