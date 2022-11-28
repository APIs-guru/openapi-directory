import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCheckoutCustomFieldsIdJsonPathParams;
    queryParams: PutCheckoutCustomFieldsIdJsonQueryParams;
    request: shared.CheckoutCustomFieldEdit;
}
export declare class PutCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    checkoutCustomField?: shared.CheckoutCustomField;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
