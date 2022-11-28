import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities
/** 
 * The capabilities a user has on this label's applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canApply" })
  canApply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRemove" })
  canRemove?: boolean;
}
