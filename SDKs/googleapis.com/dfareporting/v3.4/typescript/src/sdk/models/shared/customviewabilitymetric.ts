import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomViewabilityMetricConfiguration } from "./customviewabilitymetricconfiguration";



// CustomViewabilityMetric
/** 
 * Custom Viewability Metric
**/
export class CustomViewabilityMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: CustomViewabilityMetricConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
