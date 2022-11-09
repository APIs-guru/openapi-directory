import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostalCodeGroup } from "./postalcodegroup";
import { Service } from "./service";
import { Warehouse } from "./warehouse";


// ShippingSettings
/** 
 * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
**/
export class ShippingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=postalCodeGroups", elemType: shared.PostalCodeGroup })
  postalCodeGroups?: PostalCodeGroup[];

  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];

  @Metadata({ data: "json, name=warehouses", elemType: shared.Warehouse })
  warehouses?: Warehouse[];
}
