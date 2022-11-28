import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourcePackageResourceYum
/** 
 * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
**/
export class OsPolicyResourcePackageResourceYum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
