import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDistributionsBulkReplaceSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutDistributionsBulkReplaceRequest extends SpeakeasyBase {
    request?: Uint8Array;
    security: PutDistributionsBulkReplaceSecurity;
}
export declare class PutDistributionsBulkReplaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
