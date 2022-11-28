import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
import { ListMeta } from "./listmeta";
/**
 * A list of Service resources.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Service[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
