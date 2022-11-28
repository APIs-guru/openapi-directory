import { SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudienceTargetingSetting } from "./combinedaudiencetargetingsetting";
/**
 * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
**/
export declare class CombinedAudienceGroup extends SpeakeasyBase {
    settings?: CombinedAudienceTargetingSetting[];
}
