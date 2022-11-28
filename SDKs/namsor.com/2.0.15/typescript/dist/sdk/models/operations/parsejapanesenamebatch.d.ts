import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseJapaneseNameBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseJapaneseNameBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: ParseJapaneseNameBatchSecurity;
}
export declare class ParseJapaneseNameBatchResponse extends SpeakeasyBase {
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
}
