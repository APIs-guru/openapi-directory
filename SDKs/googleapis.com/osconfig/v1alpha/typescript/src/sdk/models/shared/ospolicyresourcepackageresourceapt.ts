import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourcePackageResourceApt
/** 
 * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
**/
export class OsPolicyResourcePackageResourceApt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
