import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricStructuredName } from "./metricstructuredname";



// MetricUpdate
/** 
 * Describes the state of a metric.
**/
export class MetricUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: any;

  @SpeakeasyMetadata({ data: "json, name=gauge" })
  gauge?: any;

  @SpeakeasyMetadata({ data: "json, name=internal" })
  internal?: any;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=meanCount" })
  meanCount?: any;

  @SpeakeasyMetadata({ data: "json, name=meanSum" })
  meanSum?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: MetricStructuredName;

  @SpeakeasyMetadata({ data: "json, name=scalar" })
  scalar?: any;

  @SpeakeasyMetadata({ data: "json, name=set" })
  set?: any;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
