import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
**/
export declare class Detail extends SpeakeasyBase {
    affectedCpeUri?: string;
    affectedPackage?: string;
    affectedVersionEnd?: Version;
    affectedVersionStart?: Version;
    description?: string;
    fixedCpeUri?: string;
    fixedPackage?: string;
    fixedVersion?: Version;
    isObsolete?: boolean;
    packageType?: string;
    severityName?: string;
    source?: string;
    sourceUpdateTime?: string;
    vendor?: string;
}
