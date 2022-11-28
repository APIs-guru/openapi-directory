import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDiscountPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CreateDiscountSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class CreateDiscountRequest extends SpeakeasyBase {
    pathParams: CreateDiscountPathParams;
    request?: shared.DiscountRequest;
    security: CreateDiscountSecurity;
}
export declare class CreateDiscountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
