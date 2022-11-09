import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourcePackageResourceGooGet
/** 
 * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
**/
export class OsPolicyResourcePackageResourceGooGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
