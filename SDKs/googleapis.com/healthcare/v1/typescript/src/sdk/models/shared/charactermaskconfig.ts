import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CharacterMaskConfig
/** 
 * Mask a string by replacing its characters with a fixed character.
**/
export class CharacterMaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maskingCharacter" })
  maskingCharacter?: string;
}
