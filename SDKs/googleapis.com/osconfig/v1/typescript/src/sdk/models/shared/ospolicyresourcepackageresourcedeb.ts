import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";



// OsPolicyResourcePackageResourceDeb
/** 
 * A deb package file. dpkg packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceDeb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullDeps" })
  pullDeps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
