import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerSessionStats } from "./customersessionstats";



export class GetCustomerSessionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: CustomerSessionStats })
  stats?: CustomerSessionStats[];
}
