import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdFieldsCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdFieldsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdFieldsCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdFieldsCountJsonPathParams;
    queryParams: GetProductsIdFieldsCountJsonQueryParams;
}
export declare class GetProductsIdFieldsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
