import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldLongTextOptions
/** 
 * Options the Long Text field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldLongTextOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;
}
