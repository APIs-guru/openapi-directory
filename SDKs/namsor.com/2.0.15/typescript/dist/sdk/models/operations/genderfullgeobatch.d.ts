import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderFullGeoBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderFullGeoBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameGeoIn;
    security: GenderFullGeoBatchSecurity;
}
export declare class GenderFullGeoBatchResponse extends SpeakeasyBase {
    batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;
    contentType: string;
    statusCode: number;
}
