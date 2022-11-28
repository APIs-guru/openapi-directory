import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";
/**
 * Update Conversions Request.
**/
export declare class ConversionsBatchUpdateRequest extends SpeakeasyBase {
    conversions?: Conversion[];
    encryptionInfo?: EncryptionInfo;
    kind?: string;
}
