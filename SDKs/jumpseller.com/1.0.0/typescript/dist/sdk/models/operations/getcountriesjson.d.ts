import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCountriesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCountriesJsonRequest extends SpeakeasyBase {
    queryParams: GetCountriesJsonQueryParams;
}
export declare class GetCountriesJsonResponse extends SpeakeasyBase {
    contentType: string;
    countries?: any[];
    statusCode: number;
}
