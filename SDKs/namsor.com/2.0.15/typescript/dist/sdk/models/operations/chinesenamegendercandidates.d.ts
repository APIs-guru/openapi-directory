import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameGenderCandidatesPathParams extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
    knownGender: string;
}
export declare class ChineseNameGenderCandidatesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameGenderCandidatesRequest extends SpeakeasyBase {
    pathParams: ChineseNameGenderCandidatesPathParams;
    security: ChineseNameGenderCandidatesSecurity;
}
export declare class ChineseNameGenderCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
}
