import { SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudienceTargetingSetting } from "./firstandthirdpartyaudiencetargetingsetting";
/**
 * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
**/
export declare class FirstAndThirdPartyAudienceGroup extends SpeakeasyBase {
    settings?: FirstAndThirdPartyAudienceTargetingSetting[];
}
