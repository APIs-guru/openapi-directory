import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities
/** 
 * The capabilities a user has on this label's applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canApply" })
  canApply?: boolean;

  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canRemove" })
  canRemove?: boolean;
}
