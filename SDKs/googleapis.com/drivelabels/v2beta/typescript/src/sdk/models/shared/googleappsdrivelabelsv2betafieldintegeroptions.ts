import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldIntegerOptions
/** 
 * Options for the Integer field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldIntegerOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @Metadata({ data: "json, name=minValue" })
  minValue?: string;
}
