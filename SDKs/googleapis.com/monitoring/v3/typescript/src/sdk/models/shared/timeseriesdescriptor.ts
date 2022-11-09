import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelDescriptor } from "./labeldescriptor";
import { ValueDescriptor } from "./valuedescriptor";


// TimeSeriesDescriptor
/** 
 * A descriptor for the labels and points in a time series.
**/
export class TimeSeriesDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelDescriptors", elemType: shared.LabelDescriptor })
  labelDescriptors?: LabelDescriptor[];

  @Metadata({ data: "json, name=pointDescriptors", elemType: shared.ValueDescriptor })
  pointDescriptors?: ValueDescriptor[];
}
