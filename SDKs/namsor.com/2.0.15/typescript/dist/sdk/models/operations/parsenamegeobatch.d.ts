import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseNameGeoBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseNameGeoBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameGeoIn;
    security: ParseNameGeoBatchSecurity;
}
export declare class ParseNameGeoBatchResponse extends SpeakeasyBase {
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
}
