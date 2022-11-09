import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";


// OsPolicyResourcePackageResourceRpm
/** 
 * An RPM package file. RPM packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceRpm extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullDeps" })
  pullDeps?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
