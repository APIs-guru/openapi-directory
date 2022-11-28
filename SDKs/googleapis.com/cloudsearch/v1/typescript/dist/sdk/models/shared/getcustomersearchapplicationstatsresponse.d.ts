import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSearchApplicationStats } from "./customersearchapplicationstats";
/**
 * Response format for search application stats for a customer.
**/
export declare class GetCustomerSearchApplicationStatsResponse extends SpeakeasyBase {
    averageSearchApplicationCount?: string;
    stats?: CustomerSearchApplicationStats[];
}
