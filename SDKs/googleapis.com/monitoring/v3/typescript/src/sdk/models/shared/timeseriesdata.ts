import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelValue } from "./labelvalue";
import { PointData } from "./pointdata";



// TimeSeriesData
/** 
 * Represents the values of a time series associated with a TimeSeriesDescriptor.
**/
export class TimeSeriesData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelValues", elemType: LabelValue })
  labelValues?: LabelValue[];

  @SpeakeasyMetadata({ data: "json, name=pointData", elemType: PointData })
  pointData?: PointData[];
}
