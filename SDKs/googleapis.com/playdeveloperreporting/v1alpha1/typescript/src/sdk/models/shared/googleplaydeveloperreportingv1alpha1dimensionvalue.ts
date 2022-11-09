import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePlayDeveloperReportingV1alpha1DimensionValue
/** 
 * Represents the value of a single dimension.
**/
export class GooglePlayDeveloperReportingV1alpha1DimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=valueLabel" })
  valueLabel?: string;
}
