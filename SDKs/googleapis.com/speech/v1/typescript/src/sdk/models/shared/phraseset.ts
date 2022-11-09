import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Phrase } from "./phrase";


// PhraseSet
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class PhraseSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phrases", elemType: shared.Phrase })
  phrases?: Phrase[];
}
