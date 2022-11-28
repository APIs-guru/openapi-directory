import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserGeneralConfigInput
/** 
 * General settings of an advertiser.
**/
export class AdvertiserGeneralConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=domainUrl" })
  domainUrl?: string;
}


// AdvertiserGeneralConfig
/** 
 * General settings of an advertiser.
**/
export class AdvertiserGeneralConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=domainUrl" })
  domainUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
