import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderJapaneseNameFullBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderJapaneseNameFullBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: GenderJapaneseNameFullBatchSecurity;
}
export declare class GenderJapaneseNameFullBatchResponse extends SpeakeasyBase {
    batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;
    contentType: string;
    statusCode: number;
}
