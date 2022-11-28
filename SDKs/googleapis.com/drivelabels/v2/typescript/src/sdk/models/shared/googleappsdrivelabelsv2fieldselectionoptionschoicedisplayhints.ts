import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2BadgeColors } from "./googleappsdrivelabelsv2badgecolors";



// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
/** 
 * UI display hints for rendering an option.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeColors" })
  badgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

  @SpeakeasyMetadata({ data: "json, name=badgePriority" })
  badgePriority?: string;

  @SpeakeasyMetadata({ data: "json, name=darkBadgeColors" })
  darkBadgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
