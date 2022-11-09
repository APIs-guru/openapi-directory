import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1EduData } from "./googlecloudchannelv1edudata";

export enum GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED"
,    Domain = "DOMAIN"
,    Team = "TEAM"
}


// GoogleCloudChannelV1CloudIdentityInfo
/** 
 * Cloud Identity information for the Cloud Channel Customer.
**/
export class GoogleCloudChannelV1CloudIdentityInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminConsoleUri" })
  adminConsoleUri?: string;

  @Metadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @Metadata({ data: "json, name=customerType" })
  customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;

  @Metadata({ data: "json, name=eduData" })
  eduData?: GoogleCloudChannelV1EduData;

  @Metadata({ data: "json, name=isDomainVerified" })
  isDomainVerified?: boolean;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=primaryDomain" })
  primaryDomain?: string;
}
