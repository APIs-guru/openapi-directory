import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UvarFilterMatchEnum {
    Unspecified = "UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}
/**
 * Defines the filtering on a single uvar.
**/
export declare class UvarFilter extends SpeakeasyBase {
    complement?: boolean;
    index?: string;
    kind?: string;
    match?: UvarFilterMatchEnum;
    values?: string[];
}
