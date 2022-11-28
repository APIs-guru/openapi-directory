import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTaxRatePathParams extends SpeakeasyBase {
    taxRateUuid: string;
}
export declare class DeleteTaxRateSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class DeleteTaxRateRequest extends SpeakeasyBase {
    pathParams: DeleteTaxRatePathParams;
    security: DeleteTaxRateSecurity;
}
export declare class DeleteTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
