import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpellingCorrection
/** 
 * Output only. Spell check result.
**/
export class SpellingCorrection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corrected" })
  corrected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=correctedText" })
  correctedText?: string;
}
