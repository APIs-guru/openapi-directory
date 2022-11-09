import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LabelDisplayHints
/** 
 * UI display hints for rendering the label.
**/
export class GoogleAppsDriveLabelsV2LabelDisplayHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
