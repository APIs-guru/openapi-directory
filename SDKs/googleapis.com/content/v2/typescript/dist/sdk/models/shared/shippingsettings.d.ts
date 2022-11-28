import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeGroup } from "./postalcodegroup";
import { Service } from "./service";
import { Warehouse } from "./warehouse";
/**
 * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
**/
export declare class ShippingSettings extends SpeakeasyBase {
    accountId?: string;
    postalCodeGroups?: PostalCodeGroup[];
    services?: Service[];
    warehouses?: Warehouse[];
}
