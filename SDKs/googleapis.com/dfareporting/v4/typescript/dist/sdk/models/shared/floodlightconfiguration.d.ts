import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { CustomViewabilityMetric } from "./customviewabilitymetric";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { OmnitureSettings } from "./omnituresettings";
import { TagSettings } from "./tagsettings";
import { ThirdPartyAuthenticationToken } from "./thirdpartyauthenticationtoken";
import { UserDefinedVariableConfiguration } from "./userdefinedvariableconfiguration";
export declare enum FloodlightConfigurationFirstDayOfWeekEnum {
    Monday = "MONDAY",
    Sunday = "SUNDAY"
}
export declare enum FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum {
    ExcludeNaturalSearchConversionAttribution = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchConversionAttribution = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchTieredConversionAttribution = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
}
/**
 * Contains properties of a Floodlight configuration.
**/
export declare class FloodlightConfiguration extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    analyticsDataSharingEnabled?: boolean;
    customViewabilityMetric?: CustomViewabilityMetric;
    exposureToConversionEnabled?: boolean;
    firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeekEnum;
    id?: string;
    idDimensionValue?: DimensionValue;
    inAppAttributionTrackingEnabled?: boolean;
    kind?: string;
    lookbackConfiguration?: LookbackConfiguration;
    naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
    omnitureSettings?: OmnitureSettings;
    subaccountId?: string;
    tagSettings?: TagSettings;
    thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[];
    userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[];
}
