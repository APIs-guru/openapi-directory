import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ListMeta } from "./listmeta";
/**
 * ListConfigurationsResponse is a list of Configuration resources.
**/
export declare class ListConfigurationsResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Configuration[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
