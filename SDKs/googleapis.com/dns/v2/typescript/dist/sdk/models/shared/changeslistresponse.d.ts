import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
import { ResponseHeader } from "./responseheader";
/**
 * The response to a request to enumerate Changes to a ResourceRecordSets collection.
**/
export declare class ChangesListResponse extends SpeakeasyBase {
    changes?: Change[];
    header?: ResponseHeader;
    kind?: string;
    nextPageToken?: string;
}
