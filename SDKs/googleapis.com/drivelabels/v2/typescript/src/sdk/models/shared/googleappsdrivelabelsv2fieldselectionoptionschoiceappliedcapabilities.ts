import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities
/** 
 * The capabilities related to this choice on applied metadata.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSelect" })
  canSelect?: boolean;
}
