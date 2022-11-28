import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiscountPathParams extends SpeakeasyBase {
    discountUuid: string;
    organizationUuid: string;
}
export declare class GetDiscountHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetDiscountSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetDiscountRequest extends SpeakeasyBase {
    pathParams: GetDiscountPathParams;
    headers: GetDiscountHeaders;
    security: GetDiscountSecurity;
}
export declare class GetDiscountResponse extends SpeakeasyBase {
    contentType: string;
    discountResponse?: shared.DiscountResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
