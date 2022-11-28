import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderFullBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderFullBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: GenderFullBatchSecurity;
}
export declare class GenderFullBatchResponse extends SpeakeasyBase {
    batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;
    contentType: string;
    statusCode: number;
}
