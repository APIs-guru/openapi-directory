import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourcePackageResourceZypper
/** 
 * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
**/
export class OsPolicyResourcePackageResourceZypper extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
