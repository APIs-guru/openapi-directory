import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaBadgeConfig } from "./googleappsdrivelabelsv2betabadgeconfig";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties
/** 
 * Basic properties of the choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeConfig" })
  badgeConfig?: GoogleAppsDriveLabelsV2betaBadgeConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=insertBeforeChoice" })
  insertBeforeChoice?: string;
}
