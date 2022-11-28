import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneCodeGeoBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PhoneCodeGeoBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNamePhoneNumberGeoIn;
    security: PhoneCodeGeoBatchSecurity;
}
export declare class PhoneCodeGeoBatchResponse extends SpeakeasyBase {
    batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;
    contentType: string;
    statusCode: number;
}
