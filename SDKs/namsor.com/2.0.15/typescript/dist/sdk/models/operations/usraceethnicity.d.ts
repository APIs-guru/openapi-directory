import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsRaceEthnicityPathParams extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class UsRaceEthnicitySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsRaceEthnicityRequest extends SpeakeasyBase {
    pathParams: UsRaceEthnicityPathParams;
    security: UsRaceEthnicitySecurity;
}
export declare class UsRaceEthnicityResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;
    statusCode: number;
}
