import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleCloudChannelV1ContactInfoInput } from "./googlecloudchannelv1contactinfo";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1ContactInfo } from "./googlecloudchannelv1contactinfo";
/**
 * Entity representing a customer of a reseller or distributor.
**/
export declare class GoogleCloudChannelV1CustomerInput extends SpeakeasyBase {
    alternateEmail?: string;
    channelPartnerId?: string;
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    domain?: string;
    languageCode?: string;
    orgDisplayName?: string;
    orgPostalAddress?: GoogleTypePostalAddress;
    primaryContactInfo?: GoogleCloudChannelV1ContactInfoInput;
}
/**
 * Entity representing a customer of a reseller or distributor.
**/
export declare class GoogleCloudChannelV1Customer extends SpeakeasyBase {
    alternateEmail?: string;
    channelPartnerId?: string;
    cloudIdentityId?: string;
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;
    createTime?: string;
    domain?: string;
    languageCode?: string;
    name?: string;
    orgDisplayName?: string;
    orgPostalAddress?: GoogleTypePostalAddress;
    primaryContactInfo?: GoogleCloudChannelV1ContactInfo;
    updateTime?: string;
}
