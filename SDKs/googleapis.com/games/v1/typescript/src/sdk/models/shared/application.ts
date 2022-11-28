import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageAsset } from "./imageasset";
import { ApplicationCategory } from "./applicationcategory";
import { Instance } from "./instance";


export enum ApplicationEnabledFeaturesEnum {
    ApplicationFeatureUnspecified = "APPLICATION_FEATURE_UNSPECIFIED",
    Snapshots = "SNAPSHOTS"
}


// Application
/** 
 * The Application resource.
**/
export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievement_count" })
  achievementCount?: number;

  @SpeakeasyMetadata({ data: "json, name=assets", elemType: ImageAsset })
  assets?: ImageAsset[];

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ApplicationCategory;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabledFeatures" })
  enabledFeatures?: ApplicationEnabledFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=leaderboard_count" })
  leaderboardCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=themeColor" })
  themeColor?: string;
}
