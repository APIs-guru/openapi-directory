import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerToCustomerCategory } from "./customertocustomercategory";


export class CustomersToCustomerCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.CustomerToCustomerCategory })
  customers?: CustomerToCustomerCategory[];
}
