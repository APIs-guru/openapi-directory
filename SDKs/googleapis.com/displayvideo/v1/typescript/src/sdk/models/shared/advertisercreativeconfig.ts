import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserCreativeConfig
/** 
 * Creatives related settings of an advertiser.
**/
export class AdvertiserCreativeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicCreativeEnabled" })
  dynamicCreativeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iasClientId" })
  iasClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=obaComplianceDisabled" })
  obaComplianceDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videoCreativeDataSharingAuthorized" })
  videoCreativeDataSharingAuthorized?: boolean;
}
