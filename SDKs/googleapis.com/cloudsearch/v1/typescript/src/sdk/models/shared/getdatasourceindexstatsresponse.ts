import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceIndexStats } from "./datasourceindexstats";


export class GetDataSourceIndexStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageIndexedItemCount" })
  averageIndexedItemCount?: string;

  @Metadata({ data: "json, name=stats", elemType: shared.DataSourceIndexStats })
  stats?: DataSourceIndexStats[];
}
