import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAttributeNamespaceMetaPathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class PutAttributeNamespaceMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutAttributeNamespaceMetaRequest extends SpeakeasyBase {
    pathParams: PutAttributeNamespaceMetaPathParams;
    request: Uint8Array;
    security: PutAttributeNamespaceMetaSecurity;
}
export declare class PutAttributeNamespaceMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
