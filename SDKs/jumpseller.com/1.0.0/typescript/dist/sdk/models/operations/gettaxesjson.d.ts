import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetTaxesJsonRequest extends SpeakeasyBase {
    queryParams: GetTaxesJsonQueryParams;
}
export declare class GetTaxesJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxes?: shared.Tax[];
}
