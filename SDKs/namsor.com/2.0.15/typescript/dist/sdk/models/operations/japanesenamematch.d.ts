import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameMatchPathParams extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseName: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameMatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameMatchRequest extends SpeakeasyBase {
    pathParams: JapaneseNameMatchPathParams;
    security: JapaneseNameMatchSecurity;
}
export declare class JapaneseNameMatchResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchedOut?: shared.NameMatchedOut;
    statusCode: number;
}
