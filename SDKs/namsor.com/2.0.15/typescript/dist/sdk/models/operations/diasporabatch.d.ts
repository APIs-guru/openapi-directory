import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiasporaBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DiasporaBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGeoIn;
    security: DiasporaBatchSecurity;
}
export declare class DiasporaBatchResponse extends SpeakeasyBase {
    batchFirstLastNameDiasporaedOut?: shared.BatchFirstLastNameDiasporaedOut;
    contentType: string;
    statusCode: number;
}
