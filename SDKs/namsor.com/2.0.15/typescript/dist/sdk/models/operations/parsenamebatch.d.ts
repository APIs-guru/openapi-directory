import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseNameBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseNameBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: ParseNameBatchSecurity;
}
export declare class ParseNameBatchResponse extends SpeakeasyBase {
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
}
