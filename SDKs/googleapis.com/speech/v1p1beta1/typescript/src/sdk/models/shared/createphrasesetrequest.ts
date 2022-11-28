import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhraseSet } from "./phraseset";



// CreatePhraseSetRequest
/** 
 * Message sent by the client for the `CreatePhraseSet` method.
**/
export class CreatePhraseSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phraseSet" })
  phraseSet?: PhraseSet;

  @SpeakeasyMetadata({ data: "json, name=phraseSetId" })
  phraseSetId?: string;
}
