import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShippingMethodsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetShippingMethodsJsonRequest extends SpeakeasyBase {
    queryParams: GetShippingMethodsJsonQueryParams;
}
export declare class GetShippingMethodsJsonResponse extends SpeakeasyBase {
    contentType: string;
    shippingMethods?: shared.ShippingMethod[];
    statusCode: number;
}
