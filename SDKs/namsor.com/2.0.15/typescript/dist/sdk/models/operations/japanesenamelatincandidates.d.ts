import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameLatinCandidatesPathParams extends SpeakeasyBase {
    japaneseGivenNameKanji: string;
    japaneseSurnameKanji: string;
}
export declare class JapaneseNameLatinCandidatesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameLatinCandidatesRequest extends SpeakeasyBase {
    pathParams: JapaneseNameLatinCandidatesPathParams;
    security: JapaneseNameLatinCandidatesSecurity;
}
export declare class JapaneseNameLatinCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
}
