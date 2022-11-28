import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsRaceEthnicityBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsRaceEthnicityBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGeoIn;
    security: UsRaceEthnicityBatchSecurity;
}
export declare class UsRaceEthnicityBatchResponse extends SpeakeasyBase {
    batchFirstLastNameUsRaceEthnicityOut?: shared.BatchFirstLastNameUsRaceEthnicityOut;
    contentType: string;
    statusCode: number;
}
