import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceIndexStats } from "./datasourceindexstats";



export class GetDataSourceIndexStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageIndexedItemCount" })
  averageIndexedItemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=stats", elemType: DataSourceIndexStats })
  stats?: DataSourceIndexStats[];
}
