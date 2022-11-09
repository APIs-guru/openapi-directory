import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleCloudChannelV1ContactInfo } from "./googlecloudchannelv1contactinfo";


// GoogleCloudChannelV1Customer
/** 
 * Entity representing a customer of a reseller or distributor.
**/
export class GoogleCloudChannelV1Customer extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @Metadata({ data: "json, name=channelPartnerId" })
  channelPartnerId?: string;

  @Metadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @Metadata({ data: "json, name=cloudIdentityInfo" })
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgDisplayName" })
  orgDisplayName?: string;

  @Metadata({ data: "json, name=orgPostalAddress" })
  orgPostalAddress?: GoogleTypePostalAddress;

  @Metadata({ data: "json, name=primaryContactInfo" })
  primaryContactInfo?: GoogleCloudChannelV1ContactInfo;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
