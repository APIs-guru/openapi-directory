import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetTaxesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetTaxesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetTaxesIdJsonPathParams;
    queryParams: GetTaxesIdJsonQueryParams;
}
export declare class GetTaxesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    tax?: shared.Tax;
}
