import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourcePackageResourceApt
/** 
 * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
**/
export class OsPolicyResourcePackageResourceApt extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
