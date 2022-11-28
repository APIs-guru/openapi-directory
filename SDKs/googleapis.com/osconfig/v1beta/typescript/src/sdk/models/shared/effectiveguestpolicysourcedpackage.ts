import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Package } from "./package";



// EffectiveGuestPolicySourcedPackage
/** 
 * A guest policy package including its source.
**/
export class EffectiveGuestPolicySourcedPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: Package;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
