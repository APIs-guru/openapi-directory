import { SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";
/**
 * A list of revisions of a file.
**/
export declare class RevisionList extends SpeakeasyBase {
    etag?: string;
    items?: Revision[];
    kind?: string;
    nextPageToken?: string;
    selfLink?: string;
}
