import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdVariantsCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdVariantsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdVariantsCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdVariantsCountJsonPathParams;
    queryParams: GetProductsIdVariantsCountJsonQueryParams;
}
export declare class GetProductsIdVariantsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
