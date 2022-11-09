import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleExampleLibraryagentV1Shelf } from "./googleexamplelibraryagentv1shelf";
/**
 * Response message for LibraryAgent.ListShelves.
**/
export declare class GoogleExampleLibraryagentV1ListShelvesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    shelves?: GoogleExampleLibraryagentV1Shelf[];
}
