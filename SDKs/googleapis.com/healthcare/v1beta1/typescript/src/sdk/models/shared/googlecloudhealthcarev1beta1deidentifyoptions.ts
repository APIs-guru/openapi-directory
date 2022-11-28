import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterMaskConfig } from "./charactermaskconfig";
import { CryptoHashConfig } from "./cryptohashconfig";
import { DateShiftConfig } from "./dateshiftconfig";



// GoogleCloudHealthcareV1beta1DeidentifyOptions
/** 
 * Specifies additional options to apply to the base `profile`.
**/
export class GoogleCloudHealthcareV1beta1DeidentifyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterMaskConfig" })
  characterMaskConfig?: CharacterMaskConfig;

  @SpeakeasyMetadata({ data: "json, name=contextualDeid" })
  contextualDeid?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cryptoHashConfig" })
  cryptoHashConfig?: CryptoHashConfig;

  @SpeakeasyMetadata({ data: "json, name=dateShiftConfig" })
  dateShiftConfig?: DateShiftConfig;

  @SpeakeasyMetadata({ data: "json, name=keepExtensions" })
  keepExtensions?: Map<string, any>;
}
