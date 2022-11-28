import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameMatchBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameMatchBatchRequest extends SpeakeasyBase {
    request?: shared.BatchMatchPersonalFirstLastNameIn;
    security: JapaneseNameMatchBatchSecurity;
}
export declare class JapaneseNameMatchBatchResponse extends SpeakeasyBase {
    batchNameMatchedOut?: shared.BatchNameMatchedOut;
    contentType: string;
    statusCode: number;
}
