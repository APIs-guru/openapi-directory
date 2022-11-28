import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFulfillmentsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFulfillmentsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetFulfillmentsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetFulfillmentsIdJsonPathParams;
    queryParams: GetFulfillmentsIdJsonQueryParams;
}
export declare class GetFulfillmentsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    fulfillment?: shared.Fulfillment;
    notFound?: any;
    statusCode: number;
}
