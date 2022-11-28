import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadAccountResponseError extends SpeakeasyBase {
    index?: number;
    message?: string;
}
/**
 * Respone of uploading accounts in batch.
**/
export declare class UploadAccountResponse extends SpeakeasyBase {
    error?: UploadAccountResponseError[];
    kind?: string;
}
