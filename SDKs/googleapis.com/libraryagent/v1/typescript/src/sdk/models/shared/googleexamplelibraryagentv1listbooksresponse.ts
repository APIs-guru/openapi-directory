import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleExampleLibraryagentV1Book } from "./googleexamplelibraryagentv1book";


// GoogleExampleLibraryagentV1ListBooksResponse
/** 
 * Response message for LibraryAgent.ListBooks.
**/
export class GoogleExampleLibraryagentV1ListBooksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=books", elemType: shared.GoogleExampleLibraryagentV1Book })
  books?: GoogleExampleLibraryagentV1Book[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
