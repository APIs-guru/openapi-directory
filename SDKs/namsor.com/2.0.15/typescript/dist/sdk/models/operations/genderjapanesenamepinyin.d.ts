import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderJapaneseNamePinyinPathParams extends SpeakeasyBase {
    japaneseGivenName: string;
    japaneseSurname: string;
}
export declare class GenderJapaneseNamePinyinSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderJapaneseNamePinyinRequest extends SpeakeasyBase {
    pathParams: GenderJapaneseNamePinyinPathParams;
    security: GenderJapaneseNamePinyinSecurity;
}
export declare class GenderJapaneseNamePinyinResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
}
