import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleExampleLibraryagentV1Shelf } from "./googleexamplelibraryagentv1shelf";



// GoogleExampleLibraryagentV1ListShelvesResponse
/** 
 * Response message for LibraryAgent.ListShelves.
**/
export class GoogleExampleLibraryagentV1ListShelvesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=shelves", elemType: GoogleExampleLibraryagentV1Shelf })
  shelves?: GoogleExampleLibraryagentV1Shelf[];
}
