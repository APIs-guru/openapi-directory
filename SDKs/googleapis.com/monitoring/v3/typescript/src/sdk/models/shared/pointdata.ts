import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";


// PointData
/** 
 * A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
**/
export class PointData extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeInterval" })
  timeInterval?: TimeInterval;

  @Metadata({ data: "json, name=values", elemType: shared.TypedValue })
  values?: TypedValue[];
}
