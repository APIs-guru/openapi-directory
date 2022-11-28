import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JapaneseNameMatchFeedbackLoopPathParams extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseName: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameMatchFeedbackLoopSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JapaneseNameMatchFeedbackLoopRequest extends SpeakeasyBase {
    pathParams: JapaneseNameMatchFeedbackLoopPathParams;
    security: JapaneseNameMatchFeedbackLoopSecurity;
}
export declare class JapaneseNameMatchFeedbackLoopResponse extends SpeakeasyBase {
    contentType: string;
    feedbackLoopOut?: shared.FeedbackLoopOut;
    statusCode: number;
}
