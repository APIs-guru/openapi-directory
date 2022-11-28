import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleExampleLibraryagentV1Book } from "./googleexamplelibraryagentv1book";



// GoogleExampleLibraryagentV1ListBooksResponse
/** 
 * Response message for LibraryAgent.ListBooks.
**/
export class GoogleExampleLibraryagentV1ListBooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=books", elemType: GoogleExampleLibraryagentV1Book })
  books?: GoogleExampleLibraryagentV1Book[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
