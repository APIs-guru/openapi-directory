import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetProductsStatusStatusCountJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class GetProductsStatusStatusCountJsonPathParams extends SpeakeasyBase {
    status: GetProductsStatusStatusCountJsonStatusEnum;
}
export declare class GetProductsStatusStatusCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsStatusStatusCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsStatusStatusCountJsonPathParams;
    queryParams: GetProductsStatusStatusCountJsonQueryParams;
}
export declare class GetProductsStatusStatusCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
    statusInvalid?: any;
}
