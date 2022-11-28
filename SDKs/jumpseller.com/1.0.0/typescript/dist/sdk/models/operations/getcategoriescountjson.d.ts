import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCategoriesCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCategoriesCountJsonRequest extends SpeakeasyBase {
    queryParams: GetCategoriesCountJsonQueryParams;
}
export declare class GetCategoriesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
