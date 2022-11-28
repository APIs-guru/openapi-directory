import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsCountJsonRequest extends SpeakeasyBase {
    queryParams: GetProductsCountJsonQueryParams;
}
export declare class GetProductsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
