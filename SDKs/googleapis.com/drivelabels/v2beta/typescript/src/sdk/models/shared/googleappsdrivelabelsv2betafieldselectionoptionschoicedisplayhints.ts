import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaBadgeColors } from "./googleappsdrivelabelsv2betabadgecolors";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints
/** 
 * UI display hints for rendering an option.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeColors" })
  badgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

  @SpeakeasyMetadata({ data: "json, name=badgePriority" })
  badgePriority?: string;

  @SpeakeasyMetadata({ data: "json, name=darkBadgeColors" })
  darkBadgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
