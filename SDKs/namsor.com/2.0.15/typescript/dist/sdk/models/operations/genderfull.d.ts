import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderFullPathParams extends SpeakeasyBase {
    fullName: string;
}
export declare class GenderFullSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderFullRequest extends SpeakeasyBase {
    pathParams: GenderFullPathParams;
    security: GenderFullSecurity;
}
export declare class GenderFullResponse extends SpeakeasyBase {
    contentType: string;
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
}
