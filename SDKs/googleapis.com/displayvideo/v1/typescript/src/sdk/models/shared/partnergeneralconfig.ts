import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartnerGeneralConfig
/** 
 * General settings of a partner.
**/
export class PartnerGeneralConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
