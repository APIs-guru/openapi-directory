import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldDisplayHints
/** 
 * UI display hints for rendering a field.
**/
export class GoogleAppsDriveLabelsV2FieldDisplayHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
