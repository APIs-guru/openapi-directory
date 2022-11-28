import { SpeakeasyBase } from "../../../internal/utils";
import { BuildVersion } from "./buildversion";
/**
 * Version and identification for an Envoy extension. [#next-free-field: 6]
**/
export declare class Extension extends SpeakeasyBase {
    category?: string;
    disabled?: boolean;
    name?: string;
    typeDescriptor?: string;
    version?: BuildVersion;
}
