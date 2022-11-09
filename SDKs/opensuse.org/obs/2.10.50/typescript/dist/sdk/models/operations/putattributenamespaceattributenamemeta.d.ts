import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
    attributeName: string;
    namespace: string;
}
export declare class PutAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
    pathParams: PutAttributeNamespaceAttributeNameMetaPathParams;
    request: Uint8Array;
    security: PutAttributeNamespaceAttributeNameMetaSecurity;
}
export declare class PutAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
