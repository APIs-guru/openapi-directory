import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricName } from "./metricname";



export class MetricsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: MetricName })
  data?: MetricName[];
}
