import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LabelAppliedCapabilities
/** 
 * The capabilities a user has on this label's applied metadata.
**/
export class GoogleAppsDriveLabelsV2LabelAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canApply" })
  canApply?: boolean;

  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canRemove" })
  canRemove?: boolean;
}
