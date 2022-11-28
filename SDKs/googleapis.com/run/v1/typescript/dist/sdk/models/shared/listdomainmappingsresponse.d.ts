import { SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";
import { ListMeta } from "./listmeta";
/**
 * ListDomainMappingsResponse is a list of DomainMapping resources.
**/
export declare class ListDomainMappingsResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: DomainMapping[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
