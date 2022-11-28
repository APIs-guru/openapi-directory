import { SpeakeasyBase } from "../../../internal/utils";
import { LiaCountrySettings } from "./liacountrysettings";
/**
 * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
**/
export declare class LiaSettings extends SpeakeasyBase {
    accountId?: string;
    countrySettings?: LiaCountrySettings[];
    kind?: string;
}
