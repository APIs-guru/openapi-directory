import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllDiscountsPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllDiscountsSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetAllDiscountsRequest extends SpeakeasyBase {
    pathParams: GetAllDiscountsPathParams;
    security: GetAllDiscountsSecurity;
}
export declare class GetAllDiscountsResponse extends SpeakeasyBase {
    contentType: string;
    discountResponses?: shared.DiscountResponse[];
    statusCode: number;
}
