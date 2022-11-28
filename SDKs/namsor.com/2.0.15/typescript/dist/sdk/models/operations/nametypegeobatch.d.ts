import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NameTypeGeoBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NameTypeGeoBatchRequest extends SpeakeasyBase {
    request?: shared.BatchNameGeoIn;
    security: NameTypeGeoBatchSecurity;
}
export declare class NameTypeGeoBatchResponse extends SpeakeasyBase {
    batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;
    contentType: string;
    statusCode: number;
}
