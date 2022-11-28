import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseJapaneseNamePathParams extends SpeakeasyBase {
    japaneseName: string;
}
export declare class ParseJapaneseNameSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseJapaneseNameRequest extends SpeakeasyBase {
    pathParams: ParseJapaneseNamePathParams;
    security: ParseJapaneseNameSecurity;
}
export declare class ParseJapaneseNameResponse extends SpeakeasyBase {
    contentType: string;
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
}
