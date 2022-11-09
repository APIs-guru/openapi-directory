import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ValidateUrlQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class ValidateUrlRequest extends SpeakeasyBase {
    queryParams: ValidateUrlQueryParams;
}
export declare class ValidateUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    validationResult?: shared.ValidationResult;
}
