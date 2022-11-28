import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * A list of changes for a user.
**/
export declare class ChangeList extends SpeakeasyBase {
    changes?: Change[];
    kind?: string;
    newStartPageToken?: string;
    nextPageToken?: string;
}
