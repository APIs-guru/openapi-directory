import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * An MSI package. MSI packages only support INSTALLED state.
**/
export declare class OsPolicyResourcePackageResourceMsi extends SpeakeasyBase {
    properties?: string[];
    source?: OsPolicyResourceFile;
}
