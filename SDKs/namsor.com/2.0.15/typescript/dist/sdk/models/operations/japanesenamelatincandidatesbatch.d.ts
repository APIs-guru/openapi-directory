import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameLatinCandidatesBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameLatinCandidatesBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: JapaneseNameLatinCandidatesBatchSecurity;
}
export declare class JapaneseNameLatinCandidatesBatchResponse extends SpeakeasyBase {
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
}
