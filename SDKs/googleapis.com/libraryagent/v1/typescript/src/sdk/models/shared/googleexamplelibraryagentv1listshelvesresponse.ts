import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleExampleLibraryagentV1Shelf } from "./googleexamplelibraryagentv1shelf";


// GoogleExampleLibraryagentV1ListShelvesResponse
/** 
 * Response message for LibraryAgent.ListShelves.
**/
export class GoogleExampleLibraryagentV1ListShelvesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=shelves", elemType: shared.GoogleExampleLibraryagentV1Shelf })
  shelves?: GoogleExampleLibraryagentV1Shelf[];
}
