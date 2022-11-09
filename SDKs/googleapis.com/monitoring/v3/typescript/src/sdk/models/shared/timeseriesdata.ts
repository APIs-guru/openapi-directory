import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelValue } from "./labelvalue";
import { PointData } from "./pointdata";


// TimeSeriesData
/** 
 * Represents the values of a time series associated with a TimeSeriesDescriptor.
**/
export class TimeSeriesData extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelValues", elemType: shared.LabelValue })
  labelValues?: LabelValue[];

  @Metadata({ data: "json, name=pointData", elemType: shared.PointData })
  pointData?: PointData[];
}
