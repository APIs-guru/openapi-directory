import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpellingCorrection
/** 
 * Spell check result.
**/
export class SpellingCorrection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corrected" })
  corrected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=correctedHtml" })
  correctedHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedText" })
  correctedText?: string;
}
