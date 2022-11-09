import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiaCountrySettings } from "./liacountrysettings";


// LiaSettings
/** 
 * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
**/
export class LiaSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=countrySettings", elemType: shared.LiaCountrySettings })
  countrySettings?: LiaCountrySettings[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
