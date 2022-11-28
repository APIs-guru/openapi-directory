import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * A deb package file. dpkg packages only support INSTALLED state.
**/
export declare class OsPolicyResourcePackageResourceDeb extends SpeakeasyBase {
    pullDeps?: boolean;
    source?: OsPolicyResourceFile;
}
