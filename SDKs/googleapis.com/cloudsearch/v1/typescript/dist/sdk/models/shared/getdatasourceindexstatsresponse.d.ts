import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceIndexStats } from "./datasourceindexstats";
export declare class GetDataSourceIndexStatsResponse extends SpeakeasyBase {
    averageIndexedItemCount?: string;
    stats?: DataSourceIndexStats[];
}
