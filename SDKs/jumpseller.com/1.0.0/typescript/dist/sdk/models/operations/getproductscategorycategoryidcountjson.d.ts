import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsCategoryCategoryIdCountJsonPathParams extends SpeakeasyBase {
    categoryId: number;
}
export declare class GetProductsCategoryCategoryIdCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsCategoryCategoryIdCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsCategoryCategoryIdCountJsonPathParams;
    queryParams: GetProductsCategoryCategoryIdCountJsonQueryParams;
}
export declare class GetProductsCategoryCategoryIdCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}
