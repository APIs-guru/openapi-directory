import { SpeakeasyBase } from "../../../internal/utils";
import { Draft } from "./draft";
export declare class ListDraftsResponse extends SpeakeasyBase {
    drafts?: Draft[];
    nextPageToken?: string;
    resultSizeEstimate?: number;
}
