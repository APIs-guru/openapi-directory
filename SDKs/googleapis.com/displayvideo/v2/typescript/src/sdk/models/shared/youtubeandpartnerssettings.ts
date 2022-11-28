import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { YoutubeAndPartnersBiddingStrategy } from "./youtubeandpartnersbiddingstrategy";
import { YoutubeAndPartnersInventorySourceConfig } from "./youtubeandpartnersinventorysourceconfig";
import { YoutubeAndPartnersThirdPartyMeasurementSettings } from "./youtubeandpartnersthirdpartymeasurementsettings";
import { FrequencyCap } from "./frequencycap";


export enum YoutubeAndPartnersSettingsContentCategoryEnum {
    YoutubeAndPartnersContentCategoryUnspecified = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED",
    YoutubeAndPartnersContentCategoryStandard = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD",
    YoutubeAndPartnersContentCategoryExpanded = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED",
    YoutubeAndPartnersContentCategoryLimited = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
}


// YoutubeAndPartnersSettings
/** 
 * Settings for YouTube and Partners line items.
**/
export class YoutubeAndPartnersSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biddingStrategy" })
  biddingStrategy?: YoutubeAndPartnersBiddingStrategy;

  @SpeakeasyMetadata({ data: "json, name=contentCategory" })
  contentCategory?: YoutubeAndPartnersSettingsContentCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=inventorySourceSettings" })
  inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyMeasurementSettings" })
  thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings;

  @SpeakeasyMetadata({ data: "json, name=viewFrequencyCap" })
  viewFrequencyCap?: FrequencyCap;
}
