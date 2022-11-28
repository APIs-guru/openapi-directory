import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrdersCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrdersCountJsonRequest extends SpeakeasyBase {
    queryParams: GetOrdersCountJsonQueryParams;
}
export declare class GetOrdersCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
