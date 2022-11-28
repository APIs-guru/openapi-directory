import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdOptionsOptionIdValuesCountJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class GetProductsIdOptionsOptionIdValuesCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsOptionIdValuesCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsOptionIdValuesCountJsonPathParams;
    queryParams: GetProductsIdOptionsOptionIdValuesCountJsonQueryParams;
}
export declare class GetProductsIdOptionsOptionIdValuesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
