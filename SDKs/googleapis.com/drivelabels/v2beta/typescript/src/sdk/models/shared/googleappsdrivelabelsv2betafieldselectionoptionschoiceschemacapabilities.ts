import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities
/** 
 * The capabilities related to this choice when editing the choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @Metadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @Metadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
