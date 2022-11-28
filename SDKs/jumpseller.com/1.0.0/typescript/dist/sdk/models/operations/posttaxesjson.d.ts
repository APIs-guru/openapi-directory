import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTaxesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostTaxesJsonRequest extends SpeakeasyBase {
    queryParams: PostTaxesJsonQueryParams;
    request: shared.TaxEdit;
}
export declare class PostTaxesJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    tax?: shared.Tax;
}
