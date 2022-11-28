import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetricName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metric-id" })
  metricId?: string;
}
