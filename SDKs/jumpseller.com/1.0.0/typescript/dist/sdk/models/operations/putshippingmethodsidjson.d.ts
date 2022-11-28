import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutShippingMethodsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutShippingMethodsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutShippingMethodsIdJsonPathParams;
    queryParams: PutShippingMethodsIdJsonQueryParams;
    request: shared.ShippingMethodEdit;
}
export declare class PutShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    shippingMethod?: shared.ShippingMethod;
    statusCode: number;
}
