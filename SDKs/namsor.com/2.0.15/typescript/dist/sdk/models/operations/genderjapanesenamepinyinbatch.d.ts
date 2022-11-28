import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderJapaneseNamePinyinBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderJapaneseNamePinyinBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameIn;
    security: GenderJapaneseNamePinyinBatchSecurity;
}
export declare class GenderJapaneseNamePinyinBatchResponse extends SpeakeasyBase {
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
}
