import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
    queryParams: GetCheckoutCustomFieldsJsonQueryParams;
}
export declare class GetCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
    checkoutCustomFields?: shared.CheckoutCustomField[];
    contentType: string;
    statusCode: number;
}
