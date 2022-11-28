import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
export declare enum PersistentDiskScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeZonal = "SCOPE_ZONAL",
    ScopeRegional = "SCOPE_REGIONAL"
}
/**
 * Specification of a persistent disk attached to a VM.
**/
export declare class PersistentDisk extends SpeakeasyBase {
    diskSize?: Usage;
    diskType?: string;
    provisionedIops?: Usage;
    scope?: PersistentDiskScopeEnum;
}
