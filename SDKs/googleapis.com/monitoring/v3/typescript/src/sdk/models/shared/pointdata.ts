import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";



// PointData
/** 
 * A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
**/
export class PointData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeInterval" })
  timeInterval?: TimeInterval;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: TypedValue })
  values?: TypedValue[];
}
