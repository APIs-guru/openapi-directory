import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPromotionsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPromotionsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetPromotionsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetPromotionsIdJsonPathParams;
    queryParams: GetPromotionsIdJsonQueryParams;
}
export declare class GetPromotionsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    promotion?: shared.Promotion;
    statusCode: number;
}
