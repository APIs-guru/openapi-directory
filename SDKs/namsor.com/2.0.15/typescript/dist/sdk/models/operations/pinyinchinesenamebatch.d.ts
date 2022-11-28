import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PinyinChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PinyinChineseNameBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: PinyinChineseNameBatchSecurity;
}
export declare class PinyinChineseNameBatchResponse extends SpeakeasyBase {
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
}
