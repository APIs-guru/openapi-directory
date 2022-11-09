import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities
/** 
 * The capabilities related to this choice on applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @Metadata({ data: "json, name=canSelect" })
  canSelect?: boolean;
}
