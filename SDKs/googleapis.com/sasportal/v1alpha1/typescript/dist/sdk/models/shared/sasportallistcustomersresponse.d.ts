import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalCustomer } from "./sasportalcustomer";
/**
 * Response for `ListCustomers`.
**/
export declare class SasPortalListCustomersResponse extends SpeakeasyBase {
    customers?: SasPortalCustomer[];
    nextPageToken?: string;
}
