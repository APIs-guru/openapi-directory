import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateResponse } from "./achievementupdateresponse";
/**
 * Response message for UpdateMultipleAchievements rpc.
**/
export declare class AchievementUpdateMultipleResponse extends SpeakeasyBase {
    kind?: string;
    updatedAchievements?: AchievementUpdateResponse[];
}
