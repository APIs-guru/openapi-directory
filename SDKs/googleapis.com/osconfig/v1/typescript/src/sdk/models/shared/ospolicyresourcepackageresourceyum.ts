import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourcePackageResourceYum
/** 
 * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
**/
export class OsPolicyResourcePackageResourceYum extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
