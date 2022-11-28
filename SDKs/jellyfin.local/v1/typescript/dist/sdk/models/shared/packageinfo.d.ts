import { SpeakeasyBase } from "../../../internal/utils";
import { VersionInfo } from "./versioninfo";
/**
 * Class PackageInfo.
**/
export declare class PackageInfo extends SpeakeasyBase {
    category?: string;
    description?: string;
    guid?: string;
    imageUrl?: string;
    name?: string;
    overview?: string;
    owner?: string;
    versions?: VersionInfo[];
}
