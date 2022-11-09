import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerSearchApplicationStats } from "./customersearchapplicationstats";


// GetCustomerSearchApplicationStatsResponse
/** 
 * Response format for search application stats for a customer.
**/
export class GetCustomerSearchApplicationStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageSearchApplicationCount" })
  averageSearchApplicationCount?: string;

  @Metadata({ data: "json, name=stats", elemType: shared.CustomerSearchApplicationStats })
  stats?: CustomerSearchApplicationStats[];
}
