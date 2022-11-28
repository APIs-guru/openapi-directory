import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourcePackageResourceGooGet
/** 
 * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
**/
export class OsPolicyResourcePackageResourceGooGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
