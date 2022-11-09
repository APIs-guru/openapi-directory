import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageAsset } from "./imageasset";
import { ApplicationCategory } from "./applicationcategory";
import { Instance } from "./instance";

export enum ApplicationEnabledFeaturesEnum {
    ApplicationFeatureUnspecified = "APPLICATION_FEATURE_UNSPECIFIED"
,    Snapshots = "SNAPSHOTS"
}


// Application
/** 
 * The Application resource.
**/
export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievement_count" })
  achievementCount?: number;

  @Metadata({ data: "json, name=assets", elemType: shared.ImageAsset })
  assets?: ImageAsset[];

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=category" })
  category?: ApplicationCategory;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabledFeatures" })
  enabledFeatures?: ApplicationEnabledFeaturesEnum[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @Metadata({ data: "json, name=leaderboard_count" })
  leaderboardCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=themeColor" })
  themeColor?: string;
}
