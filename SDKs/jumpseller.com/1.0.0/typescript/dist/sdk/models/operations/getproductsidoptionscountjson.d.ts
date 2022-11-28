import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdOptionsCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdOptionsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsCountJsonPathParams;
    queryParams: GetProductsIdOptionsCountJsonQueryParams;
}
export declare class GetProductsIdOptionsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
