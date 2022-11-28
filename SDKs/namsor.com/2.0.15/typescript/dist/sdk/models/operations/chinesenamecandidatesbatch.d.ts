import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameCandidatesBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameCandidatesBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: ChineseNameCandidatesBatchSecurity;
}
export declare class ChineseNameCandidatesBatchResponse extends SpeakeasyBase {
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
}
