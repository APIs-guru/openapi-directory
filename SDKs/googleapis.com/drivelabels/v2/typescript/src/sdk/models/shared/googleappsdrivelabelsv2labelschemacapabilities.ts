import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LabelSchemaCapabilities
/** 
 * The capabilities related to this label when editing the label.
**/
export class GoogleAppsDriveLabelsV2LabelSchemaCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canDisable" })
  canDisable?: boolean;

  @Metadata({ data: "json, name=canEnable" })
  canEnable?: boolean;

  @Metadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;
}
