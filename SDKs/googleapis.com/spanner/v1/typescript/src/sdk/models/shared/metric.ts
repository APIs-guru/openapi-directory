import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalizedString } from "./localizedstring";
import { DerivedMetric } from "./derivedmetric";
import { LocalizedString } from "./localizedstring";
import { IndexedHotKey } from "./indexedhotkey";
import { IndexedKeyRangeInfos } from "./indexedkeyrangeinfos";
import { LocalizedString } from "./localizedstring";
import { MetricMatrix } from "./metricmatrix";
import { LocalizedString } from "./localizedstring";

export enum MetricAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED"
,    Max = "MAX"
,    Sum = "SUM"
}


// Metric
/** 
 * A message representing the actual monitoring data, values for each key bucket over time, of a metric.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregation" })
  aggregation?: MetricAggregationEnum;

  @Metadata({ data: "json, name=category" })
  category?: LocalizedString;

  @Metadata({ data: "json, name=derived" })
  derived?: DerivedMetric;

  @Metadata({ data: "json, name=displayLabel" })
  displayLabel?: LocalizedString;

  @Metadata({ data: "json, name=hasNonzeroData" })
  hasNonzeroData?: boolean;

  @Metadata({ data: "json, name=hotValue" })
  hotValue?: number;

  @Metadata({ data: "json, name=indexedHotKeys", elemType: shared.IndexedHotKey })
  indexedHotKeys?: Map<string, IndexedHotKey>;

  @Metadata({ data: "json, name=indexedKeyRangeInfos", elemType: shared.IndexedKeyRangeInfos })
  indexedKeyRangeInfos?: Map<string, IndexedKeyRangeInfos>;

  @Metadata({ data: "json, name=info" })
  info?: LocalizedString;

  @Metadata({ data: "json, name=matrix" })
  matrix?: MetricMatrix;

  @Metadata({ data: "json, name=unit" })
  unit?: LocalizedString;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;
}
