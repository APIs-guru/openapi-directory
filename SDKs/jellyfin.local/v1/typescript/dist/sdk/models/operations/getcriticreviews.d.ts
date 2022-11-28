import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCriticReviewsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetCriticReviewsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetCriticReviewsRequest extends SpeakeasyBase {
    pathParams: GetCriticReviewsPathParams;
    security: GetCriticReviewsSecurity;
}
export declare class GetCriticReviewsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
