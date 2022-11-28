import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomersCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomersCountJsonRequest extends SpeakeasyBase {
    queryParams: GetCustomersCountJsonQueryParams;
}
export declare class GetCustomersCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
