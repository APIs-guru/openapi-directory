import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalCustomer } from "./sasportalcustomer";



// SasPortalListCustomersResponse
/** 
 * Response for `ListCustomers`.
**/
export class SasPortalListCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: SasPortalCustomer })
  customers?: SasPortalCustomer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
