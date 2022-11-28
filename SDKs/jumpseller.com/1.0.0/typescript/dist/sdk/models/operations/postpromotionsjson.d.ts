import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPromotionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostPromotionsJsonRequest extends SpeakeasyBase {
    queryParams: PostPromotionsJsonQueryParams;
    request: shared.PromotionEdit;
}
export declare class PostPromotionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    promotion?: shared.Promotion;
    statusCode: number;
}
