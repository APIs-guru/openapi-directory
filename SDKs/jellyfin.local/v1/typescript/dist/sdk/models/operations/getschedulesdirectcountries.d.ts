import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesDirectCountriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSchedulesDirectCountriesRequest extends SpeakeasyBase {
    security: GetSchedulesDirectCountriesSecurity;
}
export declare class GetSchedulesDirectCountriesResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesDirectCountries200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
