import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAudienceGoogleAudienceTypeEnum {
    GoogleAudienceTypeUnspecified = "GOOGLE_AUDIENCE_TYPE_UNSPECIFIED"
,    GoogleAudienceTypeAffinity = "GOOGLE_AUDIENCE_TYPE_AFFINITY"
,    GoogleAudienceTypeInMarket = "GOOGLE_AUDIENCE_TYPE_IN_MARKET"
,    GoogleAudienceTypeInstalledApps = "GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS"
,    GoogleAudienceTypeNewMobileDevices = "GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES"
,    GoogleAudienceTypeLifeEvent = "GOOGLE_AUDIENCE_TYPE_LIFE_EVENT"
,    GoogleAudienceTypeExtendedDemographic = "GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC"
}


// GoogleAudience
/** 
 * Describes a Google audience resource. Includes Google audience lists.
**/
export class GoogleAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=googleAudienceId" })
  googleAudienceId?: string;

  @Metadata({ data: "json, name=googleAudienceType" })
  googleAudienceType?: GoogleAudienceGoogleAudienceTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
