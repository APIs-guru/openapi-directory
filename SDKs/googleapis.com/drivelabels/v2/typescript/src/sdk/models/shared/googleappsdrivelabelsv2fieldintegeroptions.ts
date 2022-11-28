import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldIntegerOptions
/** 
 * Options for the Integer field type.
**/
export class GoogleAppsDriveLabelsV2FieldIntegerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;
}
