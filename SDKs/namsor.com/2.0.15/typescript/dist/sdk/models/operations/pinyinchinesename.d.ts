import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PinyinChineseNamePathParams extends SpeakeasyBase {
    chineseName: string;
}
export declare class PinyinChineseNameSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PinyinChineseNameRequest extends SpeakeasyBase {
    pathParams: PinyinChineseNamePathParams;
    security: PinyinChineseNameSecurity;
}
export declare class PinyinChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
}
