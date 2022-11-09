import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterMaskConfig } from "./charactermaskconfig";
import { CryptoHashConfig } from "./cryptohashconfig";
import { DateShiftConfig } from "./dateshiftconfig";


// InfoTypeTransformation
/** 
 * A transformation to apply to text that is identified as a specific info_type.
**/
export class InfoTypeTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterMaskConfig" })
  characterMaskConfig?: CharacterMaskConfig;

  @Metadata({ data: "json, name=cryptoHashConfig" })
  cryptoHashConfig?: CryptoHashConfig;

  @Metadata({ data: "json, name=dateShiftConfig" })
  dateShiftConfig?: DateShiftConfig;

  @Metadata({ data: "json, name=infoTypes" })
  infoTypes?: string[];

  @Metadata({ data: "json, name=redactConfig" })
  redactConfig?: Map<string, any>;

  @Metadata({ data: "json, name=replaceWithInfoTypeConfig" })
  replaceWithInfoTypeConfig?: Map<string, any>;
}
