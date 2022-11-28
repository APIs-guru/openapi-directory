import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderGeoPathParams extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
}
export declare class GenderGeoSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderGeoRequest extends SpeakeasyBase {
    pathParams: GenderGeoPathParams;
    security: GenderGeoSecurity;
}
export declare class GenderGeoResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
}
