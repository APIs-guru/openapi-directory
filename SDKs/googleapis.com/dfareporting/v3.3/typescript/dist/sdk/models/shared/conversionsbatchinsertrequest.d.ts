import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";
/**
 * Insert Conversions Request.
**/
export declare class ConversionsBatchInsertRequest extends SpeakeasyBase {
    conversions?: Conversion[];
    encryptionInfo?: EncryptionInfo;
    kind?: string;
}
