import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerToCustomerCategory } from "./customertocustomercategory";



export class CustomersToCustomerCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: CustomerToCustomerCategory })
  customers?: CustomerToCustomerCategory[];
}
