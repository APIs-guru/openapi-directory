import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderChineseNamePinyinBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderChineseNamePinyinBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: GenderChineseNamePinyinBatchSecurity;
}
export declare class GenderChineseNamePinyinBatchResponse extends SpeakeasyBase {
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
}
