import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricName } from "./metricname";


export class MetricsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.MetricName })
  data?: MetricName[];
}
