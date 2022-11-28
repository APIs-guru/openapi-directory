import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteShippingMethodsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteShippingMethodsIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteShippingMethodsIdJsonPathParams;
    queryParams: DeleteShippingMethodsIdJsonQueryParams;
}
export declare class DeleteShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteShippingMethodsIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
