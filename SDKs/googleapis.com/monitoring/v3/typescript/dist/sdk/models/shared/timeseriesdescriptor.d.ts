import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
import { ValueDescriptor } from "./valuedescriptor";
/**
 * A descriptor for the labels and points in a time series.
**/
export declare class TimeSeriesDescriptor extends SpeakeasyBase {
    labelDescriptors?: LabelDescriptor[];
    pointDescriptors?: ValueDescriptor[];
}
