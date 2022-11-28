import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CorridorPathParams extends SpeakeasyBase {
    countryIso2From: string;
    countryIso2To: string;
    firstNameFrom: string;
    firstNameTo: string;
    lastNameFrom: string;
    lastNameTo: string;
}
export declare class CorridorSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CorridorRequest extends SpeakeasyBase {
    pathParams: CorridorPathParams;
    security: CorridorSecurity;
}
export declare class CorridorResponse extends SpeakeasyBase {
    contentType: string;
    corridorOut?: shared.CorridorOut;
    statusCode: number;
}
