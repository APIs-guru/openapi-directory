import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities
/** 
 * The capabilities related to this field when editing the field.
**/
export class GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @Metadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @Metadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
