import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryStats } from "./customerquerystats";



export class GetCustomerQueryStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: CustomerQueryStats })
  stats?: CustomerQueryStats[];

  @SpeakeasyMetadata({ data: "json, name=totalQueryCount" })
  totalQueryCount?: string;
}
