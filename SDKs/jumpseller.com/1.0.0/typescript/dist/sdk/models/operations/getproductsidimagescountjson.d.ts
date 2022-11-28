import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdImagesCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdImagesCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdImagesCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdImagesCountJsonPathParams;
    queryParams: GetProductsIdImagesCountJsonQueryParams;
}
export declare class GetProductsIdImagesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
