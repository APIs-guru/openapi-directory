import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldTextOptions
/** 
 * Options for the Text field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldTextOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;
}
