import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";



// GoogleAppsDriveLabelsV2BadgeColors
/** 
 * The color derived from BadgeConfig and changed to the closest recommended supported color.
**/
export class GoogleAppsDriveLabelsV2BadgeColors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=foregroundColor" })
  foregroundColor?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=soloColor" })
  soloColor?: GoogleTypeColor;
}
