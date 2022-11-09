import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";


// AchievementConfigurationDetail
/** 
 * An achievement configuration detail.
**/
export class AchievementConfigurationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: LocalizedStringBundle;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: LocalizedStringBundle;

  @Metadata({ data: "json, name=pointValue" })
  pointValue?: number;

  @Metadata({ data: "json, name=sortRank" })
  sortRank?: number;
}
