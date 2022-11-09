import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { YoutubeAndPartnersBiddingStrategy } from "./youtubeandpartnersbiddingstrategy";
import { YoutubeAndPartnersInventorySourceConfig } from "./youtubeandpartnersinventorysourceconfig";
import { YoutubeAndPartnersThirdPartyMeasurementSettings } from "./youtubeandpartnersthirdpartymeasurementsettings";
import { FrequencyCap } from "./frequencycap";

export enum YoutubeAndPartnersSettingsContentCategoryEnum {
    YoutubeAndPartnersContentCategoryUnspecified = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED"
,    YoutubeAndPartnersContentCategoryStandard = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD"
,    YoutubeAndPartnersContentCategoryExpanded = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED"
,    YoutubeAndPartnersContentCategoryLimited = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
}


// YoutubeAndPartnersSettings
/** 
 * Settings for YouTube and Partners line items.
**/
export class YoutubeAndPartnersSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=biddingStrategy" })
  biddingStrategy?: YoutubeAndPartnersBiddingStrategy;

  @Metadata({ data: "json, name=contentCategory" })
  contentCategory?: YoutubeAndPartnersSettingsContentCategoryEnum;

  @Metadata({ data: "json, name=inventorySourceSettings" })
  inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;

  @Metadata({ data: "json, name=thirdPartyMeasurementSettings" })
  thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings;

  @Metadata({ data: "json, name=viewFrequencyCap" })
  viewFrequencyCap?: FrequencyCap;
}
