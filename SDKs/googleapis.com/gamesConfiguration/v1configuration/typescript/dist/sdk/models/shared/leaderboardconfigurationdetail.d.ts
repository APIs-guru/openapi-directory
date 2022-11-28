import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { GamesNumberFormatConfiguration } from "./gamesnumberformatconfiguration";
/**
 * A leaderboard configuration detail.
**/
export declare class LeaderboardConfigurationDetail extends SpeakeasyBase {
    iconUrl?: string;
    kind?: string;
    name?: LocalizedStringBundle;
    scoreFormat?: GamesNumberFormatConfiguration;
    sortRank?: number;
}
