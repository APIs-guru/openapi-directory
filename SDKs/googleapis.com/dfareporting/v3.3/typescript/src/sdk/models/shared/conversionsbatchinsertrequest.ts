import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";


// ConversionsBatchInsertRequest
/** 
 * Insert Conversions Request.
**/
export class ConversionsBatchInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversions", elemType: shared.Conversion })
  conversions?: Conversion[];

  @Metadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
