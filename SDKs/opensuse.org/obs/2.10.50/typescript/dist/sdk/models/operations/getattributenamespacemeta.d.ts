import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAttributeNamespaceMetaPathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class GetAttributeNamespaceMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetAttributeNamespaceMetaRequest extends SpeakeasyBase {
    pathParams: GetAttributeNamespaceMetaPathParams;
    security: GetAttributeNamespaceMetaSecurity;
}
export declare class GetAttributeNamespaceMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
