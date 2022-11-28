import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttributeNamespaceAttributeNamePathParams extends SpeakeasyBase {
    attributeName: string;
    namespace: string;
}
export declare class DeleteAttributeNamespaceAttributeNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteAttributeNamespaceAttributeNameRequest extends SpeakeasyBase {
    pathParams: DeleteAttributeNamespaceAttributeNamePathParams;
    security: DeleteAttributeNamespaceAttributeNameSecurity;
}
export declare class DeleteAttributeNamespaceAttributeNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
