import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";



// OsPolicyResourcePackageResourceMsi
/** 
 * An MSI package. MSI packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceMsi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
