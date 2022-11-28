import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseChineseNameBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: ParseChineseNameBatchSecurity;
}
export declare class ParseChineseNameBatchResponse extends SpeakeasyBase {
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
}
