import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdDigitalProductsCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdDigitalProductsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdDigitalProductsCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdDigitalProductsCountJsonPathParams;
    queryParams: GetProductsIdDigitalProductsCountJsonQueryParams;
}
export declare class GetProductsIdDigitalProductsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
