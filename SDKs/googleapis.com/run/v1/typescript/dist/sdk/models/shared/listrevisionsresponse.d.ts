import { SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";
import { ListMeta } from "./listmeta";
/**
 * ListRevisionsResponse is a list of Revision resources.
**/
export declare class ListRevisionsResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Revision[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
