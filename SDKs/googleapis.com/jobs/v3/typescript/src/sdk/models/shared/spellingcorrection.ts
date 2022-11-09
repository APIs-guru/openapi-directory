import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpellingCorrection
/** 
 * Output only. Spell check result.
**/
export class SpellingCorrection extends SpeakeasyBase {
  @Metadata({ data: "json, name=corrected" })
  corrected?: boolean;

  @Metadata({ data: "json, name=correctedText" })
  correctedText?: string;
}
