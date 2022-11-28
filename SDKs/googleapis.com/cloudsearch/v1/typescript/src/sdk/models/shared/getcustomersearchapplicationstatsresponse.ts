import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerSearchApplicationStats } from "./customersearchapplicationstats";



// GetCustomerSearchApplicationStatsResponse
/** 
 * Response format for search application stats for a customer.
**/
export class GetCustomerSearchApplicationStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageSearchApplicationCount" })
  averageSearchApplicationCount?: string;

  @SpeakeasyMetadata({ data: "json, name=stats", elemType: CustomerSearchApplicationStats })
  stats?: CustomerSearchApplicationStats[];
}
