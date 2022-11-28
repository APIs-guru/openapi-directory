import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDiscountPathParams extends SpeakeasyBase {
    discountUuid: string;
    organizationUuid: string;
}
export declare class DeleteDiscountSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class DeleteDiscountRequest extends SpeakeasyBase {
    pathParams: DeleteDiscountPathParams;
    security: DeleteDiscountSecurity;
}
export declare class DeleteDiscountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
