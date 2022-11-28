import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";



// ConversionsBatchInsertRequest
/** 
 * Insert Conversions Request.
**/
export class ConversionsBatchInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversions", elemType: Conversion })
  conversions?: Conversion[];

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
