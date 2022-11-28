import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameKanjiCandidatesBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameKanjiCandidatesBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: JapaneseNameKanjiCandidatesBatchSecurity;
}
export declare class JapaneseNameKanjiCandidatesBatchResponse extends SpeakeasyBase {
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
}
