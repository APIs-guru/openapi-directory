import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeGroup } from "./postalcodegroup";
import { Service } from "./service";
import { Warehouse } from "./warehouse";



// ShippingSettings
/** 
 * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
**/
export class ShippingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodeGroups", elemType: PostalCodeGroup })
  postalCodeGroups?: PostalCodeGroup[];

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Service })
  services?: Service[];

  @SpeakeasyMetadata({ data: "json, name=warehouses", elemType: Warehouse })
  warehouses?: Warehouse[];
}
