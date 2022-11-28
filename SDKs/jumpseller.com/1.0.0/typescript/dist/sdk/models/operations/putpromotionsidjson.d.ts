import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPromotionsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutPromotionsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutPromotionsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutPromotionsIdJsonPathParams;
    queryParams: PutPromotionsIdJsonQueryParams;
    request: shared.PromotionEdit;
}
export declare class PutPromotionsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    promotion?: shared.Promotion;
    statusCode: number;
}
