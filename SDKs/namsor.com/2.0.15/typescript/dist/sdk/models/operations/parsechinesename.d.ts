import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseChineseNamePathParams extends SpeakeasyBase {
    chineseName: string;
}
export declare class ParseChineseNameSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseChineseNameRequest extends SpeakeasyBase {
    pathParams: ParseChineseNamePathParams;
    security: ParseChineseNameSecurity;
}
export declare class ParseChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
}
