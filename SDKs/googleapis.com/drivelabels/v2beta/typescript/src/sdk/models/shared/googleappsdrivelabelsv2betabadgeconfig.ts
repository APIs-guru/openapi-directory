import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";



// GoogleAppsDriveLabelsV2betaBadgeConfig
/** 
 * Badge status of the label.
**/
export class GoogleAppsDriveLabelsV2betaBadgeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=priorityOverride" })
  priorityOverride?: string;
}
