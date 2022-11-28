import { SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";
/**
 * A list of revisions of a file.
**/
export declare class RevisionList extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    revisions?: Revision[];
}
