import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * A list of changes for a user.
**/
export declare class ChangeList extends SpeakeasyBase {
    etag?: string;
    items?: Change[];
    kind?: string;
    largestChangeId?: string;
    newStartPageToken?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
}
