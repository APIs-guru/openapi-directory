import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Class InstallationInfo.
**/
export declare class InstallationInfo extends SpeakeasyBase {
    changelog?: string;
    checksum?: string;
    guid?: string;
    name?: string;
    sourceUrl?: string;
    version?: Version;
}
