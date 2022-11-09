import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartnerGeneralConfig
/** 
 * General settings of a partner.
**/
export class PartnerGeneralConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
