import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDiscountPathParams extends SpeakeasyBase {
    discountUuid: string;
    organizationUuid: string;
}
export declare class UpdateDiscountHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateDiscountSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class UpdateDiscountRequest extends SpeakeasyBase {
    pathParams: UpdateDiscountPathParams;
    headers: UpdateDiscountHeaders;
    request: shared.DiscountRequest;
    security: UpdateDiscountSecurity;
}
export declare class UpdateDiscountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
