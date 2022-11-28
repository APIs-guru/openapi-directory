import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountryBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CountryBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: CountryBatchSecurity;
}
export declare class CountryBatchResponse extends SpeakeasyBase {
    batchPersonalNameGeoOut?: shared.BatchPersonalNameGeoOut;
    contentType: string;
    statusCode: number;
}
