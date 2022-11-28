import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata describing a family of fonts.
**/
export declare class Webfont extends SpeakeasyBase {
    category?: string;
    family?: string;
    files?: Map<string, string>;
    kind?: string;
    lastModified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
}
