import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * An RPM package file. RPM packages only support INSTALLED state.
**/
export declare class OsPolicyResourcePackageResourceRpm extends SpeakeasyBase {
    pullDeps?: boolean;
    source?: OsPolicyResourceFile;
}
