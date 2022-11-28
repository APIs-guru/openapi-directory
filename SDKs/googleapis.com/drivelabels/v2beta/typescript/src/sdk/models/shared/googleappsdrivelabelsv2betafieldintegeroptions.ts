import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaFieldIntegerOptions
/** 
 * Options for the Integer field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldIntegerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;
}
