import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2FieldTextOptions
/** 
 * Options for the Text field type.
**/
export class GoogleAppsDriveLabelsV2FieldTextOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;
}
