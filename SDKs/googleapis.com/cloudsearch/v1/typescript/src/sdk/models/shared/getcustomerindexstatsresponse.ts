import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerIndexStats } from "./customerindexstats";



export class GetCustomerIndexStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageIndexedItemCount" })
  averageIndexedItemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=stats", elemType: CustomerIndexStats })
  stats?: CustomerIndexStats[];
}
