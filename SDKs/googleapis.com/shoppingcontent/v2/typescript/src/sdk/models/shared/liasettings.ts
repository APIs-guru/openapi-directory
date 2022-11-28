import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiaCountrySettings } from "./liacountrysettings";



// LiaSettings
/** 
 * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
**/
export class LiaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=countrySettings", elemType: LiaCountrySettings })
  countrySettings?: LiaCountrySettings[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
