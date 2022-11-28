import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2BadgeConfig } from "./googleappsdrivelabelsv2badgeconfig";



// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties
/** 
 * Basic properties of the choice.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeConfig" })
  badgeConfig?: GoogleAppsDriveLabelsV2BadgeConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=insertBeforeChoice" })
  insertBeforeChoice?: string;
}
