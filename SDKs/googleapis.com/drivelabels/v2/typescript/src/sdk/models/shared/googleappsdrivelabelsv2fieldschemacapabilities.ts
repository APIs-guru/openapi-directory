import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldSchemaCapabilities
/** 
 * The capabilities related to this field when editing the field.
**/
export class GoogleAppsDriveLabelsV2FieldSchemaCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
