import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderChineseNamePinyinPathParams extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
}
export declare class GenderChineseNamePinyinSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderChineseNamePinyinRequest extends SpeakeasyBase {
    pathParams: GenderChineseNamePinyinPathParams;
    security: GenderChineseNamePinyinSecurity;
}
export declare class GenderChineseNamePinyinResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
}
