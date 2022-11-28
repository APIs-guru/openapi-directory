import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhraseSet } from "./phraseset";



// ListPhraseSetResponse
/** 
 * Message returned to the client by the `ListPhraseSet` method.
**/
export class ListPhraseSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=phraseSets", elemType: PhraseSet })
  phraseSets?: PhraseSet[];
}
