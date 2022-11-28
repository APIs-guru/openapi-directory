import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameKanjiCandidatesPathParams extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseSurnameLatin: string;
    knownGender: string;
}
export declare class JapaneseNameKanjiCandidatesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameKanjiCandidatesRequest extends SpeakeasyBase {
    pathParams: JapaneseNameKanjiCandidatesPathParams;
    security: JapaneseNameKanjiCandidatesSecurity;
}
export declare class JapaneseNameKanjiCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
}
