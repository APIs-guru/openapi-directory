import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementDefinition } from "./achievementdefinition";
/**
 * A list of achievement definition objects.
**/
export declare class AchievementDefinitionsListResponse extends SpeakeasyBase {
    items?: AchievementDefinition[];
    kind?: string;
    nextPageToken?: string;
}
