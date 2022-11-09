import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetricName extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=metric-id" })
  metricId?: string;
}
