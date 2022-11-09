import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";


// OsPolicyResourcePackageResourceMsi
/** 
 * An MSI package. MSI packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceMsi extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: string[];

  @Metadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
