import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderPathParams extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class GenderSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderRequest extends SpeakeasyBase {
    pathParams: GenderPathParams;
    security: GenderSecurity;
}
export declare class GenderResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
}
