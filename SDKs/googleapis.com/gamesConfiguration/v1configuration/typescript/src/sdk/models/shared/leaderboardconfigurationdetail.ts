import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { GamesNumberFormatConfiguration } from "./gamesnumberformatconfiguration";


// LeaderboardConfigurationDetail
/** 
 * A leaderboard configuration detail.
**/
export class LeaderboardConfigurationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: LocalizedStringBundle;

  @Metadata({ data: "json, name=scoreFormat" })
  scoreFormat?: GamesNumberFormatConfiguration;

  @Metadata({ data: "json, name=sortRank" })
  sortRank?: number;
}
