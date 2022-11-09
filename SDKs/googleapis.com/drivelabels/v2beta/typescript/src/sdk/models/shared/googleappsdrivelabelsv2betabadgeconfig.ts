import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeColor } from "./googletypecolor";


// GoogleAppsDriveLabelsV2betaBadgeConfig
/** 
 * Badge status of the label.
**/
export class GoogleAppsDriveLabelsV2betaBadgeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @Metadata({ data: "json, name=priorityOverride" })
  priorityOverride?: string;
}
