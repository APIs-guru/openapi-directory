import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerUserStats } from "./customeruserstats";



export class GetCustomerUserStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: CustomerUserStats })
  stats?: CustomerUserStats[];
}
