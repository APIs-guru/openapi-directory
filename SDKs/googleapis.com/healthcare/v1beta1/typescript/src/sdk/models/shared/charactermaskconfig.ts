import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CharacterMaskConfig
/** 
 * Mask a string by replacing its characters with a fixed character.
**/
export class CharacterMaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maskingCharacter" })
  maskingCharacter?: string;
}
