import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities
/** 
 * The capabilities related to this choice when editing the choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
