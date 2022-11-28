import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePlayDeveloperReportingV1beta1DimensionValue
/** 
 * Represents the value of a single dimension.
**/
export class GooglePlayDeveloperReportingV1beta1DimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=valueLabel" })
  valueLabel?: string;
}
