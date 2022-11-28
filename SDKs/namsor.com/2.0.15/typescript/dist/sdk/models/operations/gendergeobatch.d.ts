import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderGeoBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderGeoBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGeoIn;
    security: GenderGeoBatchSecurity;
}
export declare class GenderGeoBatchResponse extends SpeakeasyBase {
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
}
