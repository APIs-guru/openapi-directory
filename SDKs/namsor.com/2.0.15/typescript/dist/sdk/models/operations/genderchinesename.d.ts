import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderChineseNamePathParams extends SpeakeasyBase {
    chineseName: string;
}
export declare class GenderChineseNameSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderChineseNameRequest extends SpeakeasyBase {
    pathParams: GenderChineseNamePathParams;
    security: GenderChineseNameSecurity;
}
export declare class GenderChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
}
