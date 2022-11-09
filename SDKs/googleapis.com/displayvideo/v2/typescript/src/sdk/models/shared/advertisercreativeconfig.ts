import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvertiserCreativeConfig
/** 
 * Creatives related settings of an advertiser.
**/
export class AdvertiserCreativeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicCreativeEnabled" })
  dynamicCreativeEnabled?: boolean;

  @Metadata({ data: "json, name=iasClientId" })
  iasClientId?: string;

  @Metadata({ data: "json, name=obaComplianceDisabled" })
  obaComplianceDisabled?: boolean;

  @Metadata({ data: "json, name=videoCreativeDataSharingAuthorized" })
  videoCreativeDataSharingAuthorized?: boolean;
}
