import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeAndPartnersBiddingStrategy } from "./youtubeandpartnersbiddingstrategy";
import { YoutubeAndPartnersInventorySourceConfig } from "./youtubeandpartnersinventorysourceconfig";
import { YoutubeAndPartnersThirdPartyMeasurementSettings } from "./youtubeandpartnersthirdpartymeasurementsettings";
import { FrequencyCap } from "./frequencycap";
export declare enum YoutubeAndPartnersSettingsContentCategoryEnum {
    YoutubeAndPartnersContentCategoryUnspecified = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED",
    YoutubeAndPartnersContentCategoryStandard = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD",
    YoutubeAndPartnersContentCategoryExpanded = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED",
    YoutubeAndPartnersContentCategoryLimited = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
}
/**
 * Settings for YouTube and Partners line items.
**/
export declare class YoutubeAndPartnersSettings extends SpeakeasyBase {
    biddingStrategy?: YoutubeAndPartnersBiddingStrategy;
    contentCategory?: YoutubeAndPartnersSettingsContentCategoryEnum;
    inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;
    thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings;
    viewFrequencyCap?: FrequencyCap;
}
