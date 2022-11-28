import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
import { DerivedMetric } from "./derivedmetric";
import { IndexedHotKey } from "./indexedhotkey";
import { IndexedKeyRangeInfos } from "./indexedkeyrangeinfos";
import { MetricMatrix } from "./metricmatrix";


export enum MetricAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Max = "MAX",
    Sum = "SUM"
}


// Metric
/** 
 * A message representing the actual monitoring data, values for each key bucket over time, of a metric.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregation" })
  aggregation?: MetricAggregationEnum;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=derived" })
  derived?: DerivedMetric;

  @SpeakeasyMetadata({ data: "json, name=displayLabel" })
  displayLabel?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=hasNonzeroData" })
  hasNonzeroData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hotValue" })
  hotValue?: number;

  @SpeakeasyMetadata({ data: "json, name=indexedHotKeys", elemType: IndexedHotKey })
  indexedHotKeys?: Map<string, IndexedHotKey>;

  @SpeakeasyMetadata({ data: "json, name=indexedKeyRangeInfos", elemType: IndexedKeyRangeInfos })
  indexedKeyRangeInfos?: Map<string, IndexedKeyRangeInfos>;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=matrix" })
  matrix?: MetricMatrix;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}
