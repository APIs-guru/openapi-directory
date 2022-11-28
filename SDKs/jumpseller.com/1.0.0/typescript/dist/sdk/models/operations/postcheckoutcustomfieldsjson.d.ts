import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
    queryParams: PostCheckoutCustomFieldsJsonQueryParams;
    request: shared.CheckoutCustomFieldEdit;
}
export declare class PostCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
    checkoutCustomField?: shared.CheckoutCustomField;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
