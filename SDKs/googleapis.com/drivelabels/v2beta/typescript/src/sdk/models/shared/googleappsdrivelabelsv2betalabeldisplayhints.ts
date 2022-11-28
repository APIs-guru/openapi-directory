import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLabelDisplayHints
/** 
 * UI display hints for rendering the label.
**/
export class GoogleAppsDriveLabelsV2betaLabelDisplayHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
