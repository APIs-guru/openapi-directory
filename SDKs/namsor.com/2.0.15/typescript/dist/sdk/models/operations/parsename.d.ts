import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseNamePathParams extends SpeakeasyBase {
    nameFull: string;
}
export declare class ParseNameSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseNameRequest extends SpeakeasyBase {
    pathParams: ParseNamePathParams;
    security: ParseNameSecurity;
}
export declare class ParseNameResponse extends SpeakeasyBase {
    contentType: string;
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
}
