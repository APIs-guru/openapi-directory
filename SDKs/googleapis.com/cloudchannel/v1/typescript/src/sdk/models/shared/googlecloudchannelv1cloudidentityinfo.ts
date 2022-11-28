import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EduData } from "./googlecloudchannelv1edudata";


export enum GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED",
    Domain = "DOMAIN",
    Team = "TEAM"
}


// GoogleCloudChannelV1CloudIdentityInfoInput
/** 
 * Cloud Identity information for the Cloud Channel Customer.
**/
export class GoogleCloudChannelV1CloudIdentityInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=customerType" })
  customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eduData" })
  eduData?: GoogleCloudChannelV1EduData;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}


// GoogleCloudChannelV1CloudIdentityInfo
/** 
 * Cloud Identity information for the Cloud Channel Customer.
**/
export class GoogleCloudChannelV1CloudIdentityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminConsoleUri" })
  adminConsoleUri?: string;

  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=customerType" })
  customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eduData" })
  eduData?: GoogleCloudChannelV1EduData;

  @SpeakeasyMetadata({ data: "json, name=isDomainVerified" })
  isDomainVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDomain" })
  primaryDomain?: string;
}
