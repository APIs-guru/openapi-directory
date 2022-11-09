import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlossaryEntry } from "./glossaryentry";


// ListGlossaryEntriesResponse
/** 
 * Response message for ListGlossaryEntries
**/
export class ListGlossaryEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=glossaryEntries", elemType: shared.GlossaryEntry })
  glossaryEntries?: GlossaryEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
