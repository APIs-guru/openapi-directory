import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SuffixOptionEnum {
    OptionUnspecified = "OPTION_UNSPECIFIED",
    Unguessable = "UNGUESSABLE",
    Short = "SHORT",
    Custom = "CUSTOM"
}
/**
 * Short Dynamic Link suffix.
**/
export declare class Suffix extends SpeakeasyBase {
    customSuffix?: string;
    option?: SuffixOptionEnum;
}
