import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2BadgeColors } from "./googleappsdrivelabelsv2badgecolors";
import { GoogleAppsDriveLabelsV2BadgeColors } from "./googleappsdrivelabelsv2badgecolors";


// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
/** 
 * UI display hints for rendering an option.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeColors" })
  badgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

  @Metadata({ data: "json, name=badgePriority" })
  badgePriority?: string;

  @Metadata({ data: "json, name=darkBadgeColors" })
  darkBadgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @Metadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
