import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvertiserGeneralConfig
/** 
 * General settings of an advertiser.
**/
export class AdvertiserGeneralConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=domainUrl" })
  domainUrl?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
