import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2LabelAppliedCapabilities
/** 
 * The capabilities a user has on this label's applied metadata.
**/
export class GoogleAppsDriveLabelsV2LabelAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canApply" })
  canApply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRemove" })
  canRemove?: boolean;
}
