import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * An occurrence of a particular package installation found within a system's filesystem. e.g. glibc was found in /var/lib/dpkg/status
**/
export declare class Location extends SpeakeasyBase {
    cpeUri?: string;
    path?: string;
    version?: Version;
}
