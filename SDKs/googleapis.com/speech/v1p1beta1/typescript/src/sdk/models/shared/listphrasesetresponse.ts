import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PhraseSet } from "./phraseset";


// ListPhraseSetResponse
/** 
 * Message returned to the client by the `ListPhraseSet` method.
**/
export class ListPhraseSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=phraseSets", elemType: shared.PhraseSet })
  phraseSets?: PhraseSet[];
}
