import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDecimal } from "./googletypedecimal";


// GooglePlayDeveloperReportingV1alpha1MetricValue
/** 
 * Represents the value of a metric.
**/
export class GooglePlayDeveloperReportingV1alpha1MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=decimalValue" })
  decimalValue?: GoogleTypeDecimal;

  @Metadata({ data: "json, name=metric" })
  metric?: string;
}
