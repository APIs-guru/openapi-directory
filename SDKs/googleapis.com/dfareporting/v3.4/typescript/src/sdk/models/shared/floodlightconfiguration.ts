import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";
import { CustomViewabilityMetric } from "./customviewabilitymetric";
import { DimensionValue } from "./dimensionvalue";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { OmnitureSettings } from "./omnituresettings";
import { TagSettings } from "./tagsettings";
import { ThirdPartyAuthenticationToken } from "./thirdpartyauthenticationtoken";
import { UserDefinedVariableConfiguration } from "./userdefinedvariableconfiguration";

export enum FloodlightConfigurationFirstDayOfWeekEnum {
    Monday = "MONDAY"
,    Sunday = "SUNDAY"
}

export enum FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum {
    ExcludeNaturalSearchConversionAttribution = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
,    IncludeNaturalSearchConversionAttribution = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
,    IncludeNaturalSearchTieredConversionAttribution = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
}


// FloodlightConfiguration
/** 
 * Contains properties of a Floodlight configuration.
**/
export class FloodlightConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=analyticsDataSharingEnabled" })
  analyticsDataSharingEnabled?: boolean;

  @Metadata({ data: "json, name=customViewabilityMetric" })
  customViewabilityMetric?: CustomViewabilityMetric;

  @Metadata({ data: "json, name=exposureToConversionEnabled" })
  exposureToConversionEnabled?: boolean;

  @Metadata({ data: "json, name=firstDayOfWeek" })
  firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeekEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=inAppAttributionTrackingEnabled" })
  inAppAttributionTrackingEnabled?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @Metadata({ data: "json, name=naturalSearchConversionAttributionOption" })
  naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;

  @Metadata({ data: "json, name=omnitureSettings" })
  omnitureSettings?: OmnitureSettings;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=tagSettings" })
  tagSettings?: TagSettings;

  @Metadata({ data: "json, name=thirdPartyAuthenticationTokens", elemType: shared.ThirdPartyAuthenticationToken })
  thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[];

  @Metadata({ data: "json, name=userDefinedVariableConfigurations", elemType: shared.UserDefinedVariableConfiguration })
  userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[];
}
