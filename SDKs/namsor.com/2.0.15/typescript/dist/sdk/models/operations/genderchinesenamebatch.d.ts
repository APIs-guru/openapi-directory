import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderChineseNameBatchRequest extends SpeakeasyBase {
    request?: shared.BatchPersonalNameIn;
    security: GenderChineseNameBatchSecurity;
}
export declare class GenderChineseNameBatchResponse extends SpeakeasyBase {
    batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;
    contentType: string;
    statusCode: number;
}
