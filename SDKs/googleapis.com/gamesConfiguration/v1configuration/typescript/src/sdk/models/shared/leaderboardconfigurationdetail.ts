import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { GamesNumberFormatConfiguration } from "./gamesnumberformatconfiguration";



// LeaderboardConfigurationDetail
/** 
 * A leaderboard configuration detail.
**/
export class LeaderboardConfigurationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=scoreFormat" })
  scoreFormat?: GamesNumberFormatConfiguration;

  @SpeakeasyMetadata({ data: "json, name=sortRank" })
  sortRank?: number;
}
