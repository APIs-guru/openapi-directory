import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCategoriesIdJsonPathParams;
    queryParams: DeleteCategoriesIdJsonQueryParams;
}
export declare class DeleteCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCategoriesIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
