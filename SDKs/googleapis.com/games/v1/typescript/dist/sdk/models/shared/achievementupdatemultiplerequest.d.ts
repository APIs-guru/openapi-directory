import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateRequest } from "./achievementupdaterequest";
/**
 * A list of achievement update requests.
**/
export declare class AchievementUpdateMultipleRequest extends SpeakeasyBase {
    kind?: string;
    updates?: AchievementUpdateRequest[];
}
