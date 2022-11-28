import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities
/** 
 * The capabilities related to this field when editing the field.
**/
export class GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
