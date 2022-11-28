import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerCategoriesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetCustomerCategoriesJsonRequest extends SpeakeasyBase {
    queryParams: GetCustomerCategoriesJsonQueryParams;
}
export declare class GetCustomerCategoriesJsonResponse extends SpeakeasyBase {
    contentType: string;
    customerCategories?: shared.CustomerCategory[];
    statusCode: number;
}
