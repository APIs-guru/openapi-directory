import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameCandidatesPathParams extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
}
export declare class ChineseNameCandidatesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameCandidatesRequest extends SpeakeasyBase {
    pathParams: ChineseNameCandidatesPathParams;
    security: ChineseNameCandidatesSecurity;
}
export declare class ChineseNameCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
}
