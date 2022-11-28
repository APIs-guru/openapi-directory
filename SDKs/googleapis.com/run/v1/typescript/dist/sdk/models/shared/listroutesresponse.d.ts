import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { ListMeta } from "./listmeta";
/**
 * ListRoutesResponse is a list of Route resources.
**/
export declare class ListRoutesResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Route[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
