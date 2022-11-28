import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EduData } from "./googlecloudchannelv1edudata";
export declare enum GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED",
    Domain = "DOMAIN",
    Team = "TEAM"
}
/**
 * Cloud Identity information for the Cloud Channel Customer.
**/
export declare class GoogleCloudChannelV1CloudIdentityInfoInput extends SpeakeasyBase {
    alternateEmail?: string;
    customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
    eduData?: GoogleCloudChannelV1EduData;
    languageCode?: string;
    phoneNumber?: string;
}
/**
 * Cloud Identity information for the Cloud Channel Customer.
**/
export declare class GoogleCloudChannelV1CloudIdentityInfo extends SpeakeasyBase {
    adminConsoleUri?: string;
    alternateEmail?: string;
    customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
    eduData?: GoogleCloudChannelV1EduData;
    isDomainVerified?: boolean;
    languageCode?: string;
    phoneNumber?: string;
    primaryDomain?: string;
}
