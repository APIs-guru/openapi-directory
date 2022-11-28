import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShippingMethodsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetShippingMethodsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetShippingMethodsIdJsonPathParams;
    queryParams: GetShippingMethodsIdJsonQueryParams;
}
export declare class GetShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    shippingMethod?: shared.ShippingMethod;
    statusCode: number;
}
