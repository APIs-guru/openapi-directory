import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpellingCorrection
/** 
 * Spell check result.
**/
export class SpellingCorrection extends SpeakeasyBase {
  @Metadata({ data: "json, name=corrected" })
  corrected?: boolean;

  @Metadata({ data: "json, name=correctedHtml" })
  correctedHtml?: string;

  @Metadata({ data: "json, name=correctedText" })
  correctedText?: string;
}
