import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldProperties
/** 
 * The basic properties of the field.
**/
export class GoogleAppsDriveLabelsV2FieldProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=insertBeforeField" })
  insertBeforeField?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
