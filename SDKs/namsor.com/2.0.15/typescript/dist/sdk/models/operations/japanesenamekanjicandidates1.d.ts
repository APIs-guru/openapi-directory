import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameKanjiCandidates1PathParams extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameKanjiCandidates1Security extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameKanjiCandidates1Request extends SpeakeasyBase {
    pathParams: JapaneseNameKanjiCandidates1PathParams;
    security: JapaneseNameKanjiCandidates1Security;
}
export declare class JapaneseNameKanjiCandidates1Response extends SpeakeasyBase {
    contentType: string;
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
}
