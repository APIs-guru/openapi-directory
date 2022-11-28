import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAudienceGoogleAudienceTypeEnum {
    GoogleAudienceTypeUnspecified = "GOOGLE_AUDIENCE_TYPE_UNSPECIFIED",
    GoogleAudienceTypeAffinity = "GOOGLE_AUDIENCE_TYPE_AFFINITY",
    GoogleAudienceTypeInMarket = "GOOGLE_AUDIENCE_TYPE_IN_MARKET",
    GoogleAudienceTypeInstalledApps = "GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS",
    GoogleAudienceTypeNewMobileDevices = "GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES",
    GoogleAudienceTypeLifeEvent = "GOOGLE_AUDIENCE_TYPE_LIFE_EVENT",
    GoogleAudienceTypeExtendedDemographic = "GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC"
}
/**
 * Describes a Google audience resource. Includes Google audience lists.
**/
export declare class GoogleAudience extends SpeakeasyBase {
    displayName?: string;
    googleAudienceId?: string;
    googleAudienceType?: GoogleAudienceGoogleAudienceTypeEnum;
    name?: string;
}
