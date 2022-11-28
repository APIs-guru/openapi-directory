import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDecimal } from "./googletypedecimal";



// GooglePlayDeveloperReportingV1alpha1MetricValue
/** 
 * Represents the value of a metric.
**/
export class GooglePlayDeveloperReportingV1alpha1MetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decimalValue" })
  decimalValue?: GoogleTypeDecimal;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;
}
