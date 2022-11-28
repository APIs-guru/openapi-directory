import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardPaging } from "./forwardpaging";
import { ActionRevision } from "./actionrevision";
export declare class CollectionResponseActionRevisionForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: ActionRevision[];
}
