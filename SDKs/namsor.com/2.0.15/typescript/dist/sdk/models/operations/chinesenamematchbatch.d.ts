import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameMatchBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameMatchBatchRequest extends SpeakeasyBase {
    request?: shared.BatchMatchPersonalFirstLastNameIn;
    security: ChineseNameMatchBatchSecurity;
}
export declare class ChineseNameMatchBatchResponse extends SpeakeasyBase {
    batchNameMatchedOut?: shared.BatchNameMatchedOut;
    contentType: string;
    statusCode: number;
}
