import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
**/
export declare class VersionInfo extends SpeakeasyBase {
    versionNumber?: Version;
    changelog?: string;
    checksum?: string;
    repositoryName?: string;
    repositoryUrl?: string;
    sourceUrl?: string;
    targetAbi?: string;
    timestamp?: string;
    version?: string;
}
