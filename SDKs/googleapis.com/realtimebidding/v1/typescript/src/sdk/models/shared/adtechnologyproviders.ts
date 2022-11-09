import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdTechnologyProviders
/** 
 * The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration.
**/
export class AdTechnologyProviders extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedGvlIds" })
  detectedGvlIds?: string[];

  @Metadata({ data: "json, name=detectedProviderIds" })
  detectedProviderIds?: string[];

  @Metadata({ data: "json, name=unidentifiedProviderDomains" })
  unidentifiedProviderDomains?: string[];
}
