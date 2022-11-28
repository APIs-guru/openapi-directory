import { SpeakeasyBase } from "../../../internal/utils";
import { Adloox } from "./adloox";
import { DoubleVerify } from "./doubleverify";
import { IntegralAdScience } from "./integraladscience";
/**
 * Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
**/
export declare class ThirdPartyVerifierAssignedTargetingOptionDetails extends SpeakeasyBase {
    adloox?: Adloox;
    doubleVerify?: DoubleVerify;
    integralAdScience?: IntegralAdScience;
}
