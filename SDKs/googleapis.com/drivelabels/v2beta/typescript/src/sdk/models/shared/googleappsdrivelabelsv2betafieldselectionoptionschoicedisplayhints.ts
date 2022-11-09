import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaBadgeColors } from "./googleappsdrivelabelsv2betabadgecolors";
import { GoogleAppsDriveLabelsV2betaBadgeColors } from "./googleappsdrivelabelsv2betabadgecolors";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints
/** 
 * UI display hints for rendering an option.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeColors" })
  badgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

  @Metadata({ data: "json, name=badgePriority" })
  badgePriority?: string;

  @Metadata({ data: "json, name=darkBadgeColors" })
  darkBadgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @Metadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
