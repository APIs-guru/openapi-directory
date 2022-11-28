import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { CustomViewabilityMetric } from "./customviewabilitymetric";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { OmnitureSettings } from "./omnituresettings";
import { TagSettings } from "./tagsettings";
import { ThirdPartyAuthenticationToken } from "./thirdpartyauthenticationtoken";
import { UserDefinedVariableConfiguration } from "./userdefinedvariableconfiguration";


export enum FloodlightConfigurationFirstDayOfWeekEnum {
    Monday = "MONDAY",
    Sunday = "SUNDAY"
}

export enum FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum {
    ExcludeNaturalSearchConversionAttribution = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchConversionAttribution = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchTieredConversionAttribution = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
}


// FloodlightConfiguration
/** 
 * Contains properties of a Floodlight configuration.
**/
export class FloodlightConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=analyticsDataSharingEnabled" })
  analyticsDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customViewabilityMetric" })
  customViewabilityMetric?: CustomViewabilityMetric;

  @SpeakeasyMetadata({ data: "json, name=exposureToConversionEnabled" })
  exposureToConversionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstDayOfWeek" })
  firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=inAppAttributionTrackingEnabled" })
  inAppAttributionTrackingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=naturalSearchConversionAttributionOption" })
  naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=omnitureSettings" })
  omnitureSettings?: OmnitureSettings;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagSettings" })
  tagSettings?: TagSettings;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyAuthenticationTokens", elemType: ThirdPartyAuthenticationToken })
  thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[];

  @SpeakeasyMetadata({ data: "json, name=userDefinedVariableConfigurations", elemType: UserDefinedVariableConfiguration })
  userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[];
}
