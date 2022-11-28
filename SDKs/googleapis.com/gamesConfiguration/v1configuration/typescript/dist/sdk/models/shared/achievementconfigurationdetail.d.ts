import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
/**
 * An achievement configuration detail.
**/
export declare class AchievementConfigurationDetail extends SpeakeasyBase {
    description?: LocalizedStringBundle;
    iconUrl?: string;
    kind?: string;
    name?: LocalizedStringBundle;
    pointValue?: number;
    sortRank?: number;
}
