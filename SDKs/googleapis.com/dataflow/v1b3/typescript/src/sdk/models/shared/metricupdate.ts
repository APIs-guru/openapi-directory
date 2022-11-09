import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricStructuredName } from "./metricstructuredname";


// MetricUpdate
/** 
 * Describes the state of a metric.
**/
export class MetricUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @Metadata({ data: "json, name=distribution" })
  distribution?: any;

  @Metadata({ data: "json, name=gauge" })
  gauge?: any;

  @Metadata({ data: "json, name=internal" })
  internal?: any;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=meanCount" })
  meanCount?: any;

  @Metadata({ data: "json, name=meanSum" })
  meanSum?: any;

  @Metadata({ data: "json, name=name" })
  name?: MetricStructuredName;

  @Metadata({ data: "json, name=scalar" })
  scalar?: any;

  @Metadata({ data: "json, name=set" })
  set?: any;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
