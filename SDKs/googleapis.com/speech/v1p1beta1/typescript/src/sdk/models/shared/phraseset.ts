import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Phrase } from "./phrase";



// PhraseSet
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class PhraseSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phrases", elemType: Phrase })
  phrases?: Phrase[];
}
