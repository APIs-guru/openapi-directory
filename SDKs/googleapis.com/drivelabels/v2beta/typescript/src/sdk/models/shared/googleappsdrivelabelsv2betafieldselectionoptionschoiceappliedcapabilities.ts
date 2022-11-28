import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities
/** 
 * The capabilities related to this choice on applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSelect" })
  canSelect?: boolean;
}
