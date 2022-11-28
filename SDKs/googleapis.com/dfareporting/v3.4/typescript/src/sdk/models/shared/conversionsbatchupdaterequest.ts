import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";



// ConversionsBatchUpdateRequest
/** 
 * Update Conversions Request.
**/
export class ConversionsBatchUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversions", elemType: Conversion })
  conversions?: Conversion[];

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
