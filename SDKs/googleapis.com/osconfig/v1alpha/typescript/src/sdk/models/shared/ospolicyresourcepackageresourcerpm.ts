import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";



// OsPolicyResourcePackageResourceRpm
/** 
 * An RPM package file. RPM packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceRpm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullDeps" })
  pullDeps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
