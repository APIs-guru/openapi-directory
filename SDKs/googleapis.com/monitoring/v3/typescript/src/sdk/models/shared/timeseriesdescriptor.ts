import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
import { ValueDescriptor } from "./valuedescriptor";



// TimeSeriesDescriptor
/** 
 * A descriptor for the labels and points in a time series.
**/
export class TimeSeriesDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelDescriptors", elemType: LabelDescriptor })
  labelDescriptors?: LabelDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=pointDescriptors", elemType: ValueDescriptor })
  pointDescriptors?: ValueDescriptor[];
}
