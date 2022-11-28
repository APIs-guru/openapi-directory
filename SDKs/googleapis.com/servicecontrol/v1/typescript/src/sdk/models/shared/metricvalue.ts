import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
import { Money } from "./money";



// MetricValue
/** 
 * Represents a single metric value.
**/
export class MetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distributionValue" })
  distributionValue?: Distribution;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=moneyValue" })
  moneyValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
