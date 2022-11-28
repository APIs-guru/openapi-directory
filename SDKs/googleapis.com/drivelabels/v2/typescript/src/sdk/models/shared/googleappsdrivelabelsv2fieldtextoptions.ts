import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldTextOptions
/** 
 * Options for the Text field type.
**/
export class GoogleAppsDriveLabelsV2FieldTextOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;
}
