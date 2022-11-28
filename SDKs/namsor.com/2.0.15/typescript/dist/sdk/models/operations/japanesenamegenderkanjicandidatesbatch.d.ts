import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameGenderKanjiCandidatesBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameGenderKanjiCandidatesBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGenderIn;
    security: JapaneseNameGenderKanjiCandidatesBatchSecurity;
}
export declare class JapaneseNameGenderKanjiCandidatesBatchResponse extends SpeakeasyBase {
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
}
