import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostShippingMethodsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostShippingMethodsJsonRequest extends SpeakeasyBase {
    queryParams: PostShippingMethodsJsonQueryParams;
    request: shared.ShippingMethodEdit;
}
export declare class PostShippingMethodsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    shippingMethod?: shared.ShippingMethod;
    statusCode: number;
}
