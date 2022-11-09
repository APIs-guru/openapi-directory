import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities
/** 
 * The capabilities related to this choice on applied metadata.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @Metadata({ data: "json, name=canSelect" })
  canSelect?: boolean;
}
