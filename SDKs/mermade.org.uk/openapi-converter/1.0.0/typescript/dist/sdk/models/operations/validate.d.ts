import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ValidateRequestBody extends SpeakeasyBase {
    filename?: string;
    source?: string;
}
export declare class ValidateRequest extends SpeakeasyBase {
    request?: ValidateRequestBody;
}
export declare class ValidateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    validate400ApplicationJsonAny?: any;
    validationResult?: shared.ValidationResult;
}
