import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAttributeNamespacePathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class DeleteAttributeNamespaceSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteAttributeNamespaceRequest extends SpeakeasyBase {
    pathParams: DeleteAttributeNamespacePathParams;
    security: DeleteAttributeNamespaceSecurity;
}
export declare class DeleteAttributeNamespaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
