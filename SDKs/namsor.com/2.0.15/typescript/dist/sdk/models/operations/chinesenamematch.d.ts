import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChineseNameMatchPathParams extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseName: string;
    chineseSurnameLatin: string;
}
export declare class ChineseNameMatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChineseNameMatchRequest extends SpeakeasyBase {
    pathParams: ChineseNameMatchPathParams;
    security: ChineseNameMatchSecurity;
}
export declare class ChineseNameMatchResponse extends SpeakeasyBase {
    contentType: string;
    nameMatchedOut?: shared.NameMatchedOut;
    statusCode: number;
}
