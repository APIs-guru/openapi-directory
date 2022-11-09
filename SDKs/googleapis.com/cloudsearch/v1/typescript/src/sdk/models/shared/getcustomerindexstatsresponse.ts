import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerIndexStats } from "./customerindexstats";


export class GetCustomerIndexStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageIndexedItemCount" })
  averageIndexedItemCount?: string;

  @Metadata({ data: "json, name=stats", elemType: shared.CustomerIndexStats })
  stats?: CustomerIndexStats[];
}
