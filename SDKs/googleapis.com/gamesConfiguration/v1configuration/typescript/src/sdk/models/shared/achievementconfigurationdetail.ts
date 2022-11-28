import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";



// AchievementConfigurationDetail
/** 
 * An achievement configuration detail.
**/
export class AchievementConfigurationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=pointValue" })
  pointValue?: number;

  @SpeakeasyMetadata({ data: "json, name=sortRank" })
  sortRank?: number;
}
