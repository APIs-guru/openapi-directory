import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Adloox } from "./adloox";
import { DoubleVerify } from "./doubleverify";
import { IntegralAdScience } from "./integraladscience";



// ThirdPartyVerifierAssignedTargetingOptionDetails
/** 
 * Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
**/
export class ThirdPartyVerifierAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adloox" })
  adloox?: Adloox;

  @SpeakeasyMetadata({ data: "json, name=doubleVerify" })
  doubleVerify?: DoubleVerify;

  @SpeakeasyMetadata({ data: "json, name=integralAdScience" })
  integralAdScience?: IntegralAdScience;
}
