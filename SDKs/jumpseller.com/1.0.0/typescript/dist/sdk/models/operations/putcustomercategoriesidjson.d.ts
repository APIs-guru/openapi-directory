import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCustomerCategoriesIdJsonPathParams;
    queryParams: PutCustomerCategoriesIdJsonQueryParams;
    request: shared.CustomerCategoryEdit;
}
export declare class PutCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customerCategory?: shared.CustomerCategory;
    notFound?: any;
    statusCode: number;
}
