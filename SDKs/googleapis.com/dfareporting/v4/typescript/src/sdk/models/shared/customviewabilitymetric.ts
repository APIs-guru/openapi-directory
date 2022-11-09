import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomViewabilityMetricConfiguration } from "./customviewabilitymetricconfiguration";


// CustomViewabilityMetric
/** 
 * Custom Viewability Metric
**/
export class CustomViewabilityMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: CustomViewabilityMetricConfiguration;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
