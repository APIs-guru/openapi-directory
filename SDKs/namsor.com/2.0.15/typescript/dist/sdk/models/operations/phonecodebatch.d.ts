import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneCodeBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PhoneCodeBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNamePhoneNumberIn;
    security: PhoneCodeBatchSecurity;
}
export declare class PhoneCodeBatchResponse extends SpeakeasyBase {
    batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;
    contentType: string;
    statusCode: number;
}
