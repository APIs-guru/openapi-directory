import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV2betaDenyRule } from "./googleiamv2betadenyrule";



// GoogleIamV2betaPolicyRule
/** 
 * A single rule in a `Policy`.
**/
export class GoogleIamV2betaPolicyRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=denyRule" })
  denyRule?: GoogleIamV2betaDenyRule;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
