import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CorridorBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CorridorBatchRequest extends SpeakeasyBase {
    request?: shared.BatchCorridorIn;
    security: CorridorBatchSecurity;
}
export declare class CorridorBatchResponse extends SpeakeasyBase {
    batchCorridorOut?: shared.BatchCorridorOut;
    contentType: string;
    statusCode: number;
}
