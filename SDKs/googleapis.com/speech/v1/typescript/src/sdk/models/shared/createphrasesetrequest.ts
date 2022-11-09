import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PhraseSet } from "./phraseset";


// CreatePhraseSetRequest
/** 
 * Message sent by the client for the `CreatePhraseSet` method.
**/
export class CreatePhraseSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=phraseSet" })
  phraseSet?: PhraseSet;

  @Metadata({ data: "json, name=phraseSetId" })
  phraseSetId?: string;
}
