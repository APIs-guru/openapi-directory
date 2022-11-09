import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalCustomer } from "./sasportalcustomer";


// SasPortalListCustomersResponse
/** 
 * Response for `ListCustomers`.
**/
export class SasPortalListCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.SasPortalCustomer })
  customers?: SasPortalCustomer[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
