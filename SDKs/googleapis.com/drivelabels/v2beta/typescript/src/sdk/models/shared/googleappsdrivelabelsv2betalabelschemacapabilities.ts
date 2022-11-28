import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities
/** 
 * The capabilities related to this label when editing the label.
**/
export class GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
