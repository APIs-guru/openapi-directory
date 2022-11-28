import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCountriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetCountriesRequest extends SpeakeasyBase {
    security: GetCountriesSecurity;
}
export declare class GetCountriesResponse extends SpeakeasyBase {
    contentType: string;
    countryInfos?: shared.CountryInfo[];
    statusCode: number;
}
