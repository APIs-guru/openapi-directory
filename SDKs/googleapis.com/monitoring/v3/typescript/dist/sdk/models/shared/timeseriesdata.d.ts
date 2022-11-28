import { SpeakeasyBase } from "../../../internal/utils";
import { LabelValue } from "./labelvalue";
import { PointData } from "./pointdata";
/**
 * Represents the values of a time series associated with a TimeSeriesDescriptor.
**/
export declare class TimeSeriesData extends SpeakeasyBase {
    labelValues?: LabelValue[];
    pointData?: PointData[];
}
