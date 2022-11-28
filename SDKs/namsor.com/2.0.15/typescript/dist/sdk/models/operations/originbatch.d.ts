import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OriginBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OriginBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: OriginBatchSecurity;
}
export declare class OriginBatchResponse extends SpeakeasyBase {
    batchFirstLastNameOriginedOut?: shared.BatchFirstLastNameOriginedOut;
    contentType: string;
    statusCode: number;
}
