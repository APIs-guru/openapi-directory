import { SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
/**
 * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
**/
export declare class Dataset extends SpeakeasyBase {
    dataSourceId?: string;
    maxEndTimeNs?: string;
    minStartTimeNs?: string;
    nextPageToken?: string;
    point?: DataPoint[];
}
