import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: GenderBatchSecurity;
}
export declare class GenderBatchResponse extends SpeakeasyBase {
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
}
