import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlossaryEntry } from "./glossaryentry";



// ListGlossaryEntriesResponse
/** 
 * Response message for ListGlossaryEntries
**/
export class ListGlossaryEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossaryEntries", elemType: GlossaryEntry })
  glossaryEntries?: GlossaryEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
