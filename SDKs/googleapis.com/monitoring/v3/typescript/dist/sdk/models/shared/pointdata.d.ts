import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";
/**
 * A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
**/
export declare class PointData extends SpeakeasyBase {
    timeInterval?: TimeInterval;
    values?: TypedValue[];
}
