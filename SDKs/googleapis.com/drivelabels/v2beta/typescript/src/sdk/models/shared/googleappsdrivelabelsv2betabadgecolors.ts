import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleTypeColor } from "./googletypecolor";


// GoogleAppsDriveLabelsV2betaBadgeColors
/** 
 * The color derived from BadgeConfig and changed to the closest recommended supported color.
**/
export class GoogleAppsDriveLabelsV2betaBadgeColors extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @Metadata({ data: "json, name=foregroundColor" })
  foregroundColor?: GoogleTypeColor;

  @Metadata({ data: "json, name=soloColor" })
  soloColor?: GoogleTypeColor;
}
