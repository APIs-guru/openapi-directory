import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourcePackageResourceZypper
/** 
 * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
**/
export class OsPolicyResourcePackageResourceZypper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
