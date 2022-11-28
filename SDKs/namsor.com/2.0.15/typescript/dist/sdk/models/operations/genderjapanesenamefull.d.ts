import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderJapaneseNameFullPathParams extends SpeakeasyBase {
    japaneseName: string;
}
export declare class GenderJapaneseNameFullSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderJapaneseNameFullRequest extends SpeakeasyBase {
    pathParams: GenderJapaneseNameFullPathParams;
    security: GenderJapaneseNameFullSecurity;
}
export declare class GenderJapaneseNameFullResponse extends SpeakeasyBase {
    contentType: string;
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
}
