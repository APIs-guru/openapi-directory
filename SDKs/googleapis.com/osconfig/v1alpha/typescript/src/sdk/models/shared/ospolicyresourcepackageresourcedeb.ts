import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";


// OsPolicyResourcePackageResourceDeb
/** 
 * A deb package file. dpkg packages only support INSTALLED state.
**/
export class OsPolicyResourcePackageResourceDeb extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullDeps" })
  pullDeps?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: OsPolicyResourceFile;
}
