import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAttributeNamespacePathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class GetAttributeNamespaceSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetAttributeNamespaceRequest extends SpeakeasyBase {
    pathParams: GetAttributeNamespacePathParams;
    security: GetAttributeNamespaceSecurity;
}
export declare class GetAttributeNamespaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
