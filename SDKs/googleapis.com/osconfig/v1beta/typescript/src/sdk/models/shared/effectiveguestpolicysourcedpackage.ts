import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Package } from "./package";


// EffectiveGuestPolicySourcedPackage
/** 
 * A guest policy package including its source.
**/
export class EffectiveGuestPolicySourcedPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=package" })
  package?: Package;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
