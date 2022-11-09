import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Distribution } from "./distribution";
import { Money } from "./money";


// MetricValue
/** 
 * Represents a single metric value.
**/
export class MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=distributionValue" })
  distributionValue?: Distribution;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=moneyValue" })
  moneyValue?: Money;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
