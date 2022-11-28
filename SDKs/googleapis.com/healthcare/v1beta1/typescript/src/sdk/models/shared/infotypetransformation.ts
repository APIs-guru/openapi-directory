import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterMaskConfig } from "./charactermaskconfig";
import { CryptoHashConfig } from "./cryptohashconfig";
import { DateShiftConfig } from "./dateshiftconfig";



// InfoTypeTransformation
/** 
 * A transformation to apply to text that is identified as a specific info_type.
**/
export class InfoTypeTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterMaskConfig" })
  characterMaskConfig?: CharacterMaskConfig;

  @SpeakeasyMetadata({ data: "json, name=cryptoHashConfig" })
  cryptoHashConfig?: CryptoHashConfig;

  @SpeakeasyMetadata({ data: "json, name=dateShiftConfig" })
  dateShiftConfig?: DateShiftConfig;

  @SpeakeasyMetadata({ data: "json, name=infoTypes" })
  infoTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=redactConfig" })
  redactConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=replaceWithInfoTypeConfig" })
  replaceWithInfoTypeConfig?: Map<string, any>;
}
