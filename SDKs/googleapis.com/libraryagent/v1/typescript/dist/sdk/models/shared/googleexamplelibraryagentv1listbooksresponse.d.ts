import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleExampleLibraryagentV1Book } from "./googleexamplelibraryagentv1book";
/**
 * Response message for LibraryAgent.ListBooks.
**/
export declare class GoogleExampleLibraryagentV1ListBooksResponse extends SpeakeasyBase {
    books?: GoogleExampleLibraryagentV1Book[];
    nextPageToken?: string;
}
