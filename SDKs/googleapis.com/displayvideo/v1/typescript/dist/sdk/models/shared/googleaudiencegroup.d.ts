import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudienceTargetingSetting } from "./googleaudiencetargetingsetting";
/**
 * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
**/
export declare class GoogleAudienceGroup extends SpeakeasyBase {
    settings?: GoogleAudienceTargetingSetting[];
}
