import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2FieldIntegerOptions
/** 
 * Options for the Integer field type.
**/
export class GoogleAppsDriveLabelsV2FieldIntegerOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @Metadata({ data: "json, name=minValue" })
  minValue?: string;
}
