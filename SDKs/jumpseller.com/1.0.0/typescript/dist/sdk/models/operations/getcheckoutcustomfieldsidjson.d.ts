import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCheckoutCustomFieldsIdJsonPathParams;
    queryParams: GetCheckoutCustomFieldsIdJsonQueryParams;
}
export declare class GetCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    checkoutCustomField?: shared.CheckoutCustomField;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
