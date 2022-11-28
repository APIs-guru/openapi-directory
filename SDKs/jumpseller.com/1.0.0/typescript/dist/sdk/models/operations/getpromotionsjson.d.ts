import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPromotionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetPromotionsJsonRequest extends SpeakeasyBase {
    queryParams: GetPromotionsJsonQueryParams;
}
export declare class GetPromotionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    promotions?: shared.Promotion[];
    statusCode: number;
}
