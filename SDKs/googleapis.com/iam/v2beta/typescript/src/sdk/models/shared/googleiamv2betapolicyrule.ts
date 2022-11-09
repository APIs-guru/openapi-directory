import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIamV2betaDenyRule } from "./googleiamv2betadenyrule";


// GoogleIamV2betaPolicyRule
/** 
 * A single rule in a `Policy`.
**/
export class GoogleIamV2betaPolicyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=denyRule" })
  denyRule?: GoogleIamV2betaDenyRule;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
