import { SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
export declare class ListDataPointChangesResponse extends SpeakeasyBase {
    dataSourceId?: string;
    deletedDataPoint?: DataPoint[];
    insertedDataPoint?: DataPoint[];
    nextPageToken?: string;
}
