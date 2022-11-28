import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "PATH".
**/
export declare class PathReportCompatibleFields extends SpeakeasyBase {
    channelGroupings?: Dimension[];
    dimensions?: Dimension[];
    kind?: string;
    metrics?: Metric[];
    pathFilters?: Dimension[];
}
