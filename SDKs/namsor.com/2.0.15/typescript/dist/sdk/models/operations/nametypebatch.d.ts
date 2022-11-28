import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NameTypeBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NameTypeBatchRequest extends SpeakeasyBase {
    request?: shared.BatchNameIn;
    security: NameTypeBatchSecurity;
}
export declare class NameTypeBatchResponse extends SpeakeasyBase {
    batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;
    contentType: string;
    statusCode: number;
}
