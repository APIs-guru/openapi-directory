import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleCloudChannelV1ContactInfoInput } from "./googlecloudchannelv1contactinfo";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1ContactInfo } from "./googlecloudchannelv1contactinfo";



// GoogleCloudChannelV1CustomerInput
/** 
 * Entity representing a customer of a reseller or distributor.
**/
export class GoogleCloudChannelV1CustomerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=channelPartnerId" })
  channelPartnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudIdentityInfo" })
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=orgDisplayName" })
  orgDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=orgPostalAddress" })
  orgPostalAddress?: GoogleTypePostalAddress;

  @SpeakeasyMetadata({ data: "json, name=primaryContactInfo" })
  primaryContactInfo?: GoogleCloudChannelV1ContactInfoInput;
}


// GoogleCloudChannelV1Customer
/** 
 * Entity representing a customer of a reseller or distributor.
**/
export class GoogleCloudChannelV1Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=channelPartnerId" })
  channelPartnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudIdentityInfo" })
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgDisplayName" })
  orgDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=orgPostalAddress" })
  orgPostalAddress?: GoogleTypePostalAddress;

  @SpeakeasyMetadata({ data: "json, name=primaryContactInfo" })
  primaryContactInfo?: GoogleCloudChannelV1ContactInfo;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
