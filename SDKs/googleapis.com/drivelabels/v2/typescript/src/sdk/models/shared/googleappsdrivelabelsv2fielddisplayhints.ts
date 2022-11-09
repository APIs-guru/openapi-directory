import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2FieldDisplayHints
/** 
 * UI display hints for rendering a field.
**/
export class GoogleAppsDriveLabelsV2FieldDisplayHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=hiddenInSearch" })
  hiddenInSearch?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=shownInApply" })
  shownInApply?: boolean;
}
