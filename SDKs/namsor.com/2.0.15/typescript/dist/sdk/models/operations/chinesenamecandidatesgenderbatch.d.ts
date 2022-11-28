import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameCandidatesGenderBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameCandidatesGenderBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGenderIn;
    security: ChineseNameCandidatesGenderBatchSecurity;
}
export declare class ChineseNameCandidatesGenderBatchResponse extends SpeakeasyBase {
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
}
