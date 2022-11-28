import { SpeakeasyBase } from "../../../internal/utils";
import { ImageAsset } from "./imageasset";
import { ApplicationCategory } from "./applicationcategory";
import { Instance } from "./instance";
export declare enum ApplicationEnabledFeaturesEnum {
    ApplicationFeatureUnspecified = "APPLICATION_FEATURE_UNSPECIFIED",
    Snapshots = "SNAPSHOTS"
}
/**
 * The Application resource.
**/
export declare class Application extends SpeakeasyBase {
    achievementCount?: number;
    assets?: ImageAsset[];
    author?: string;
    category?: ApplicationCategory;
    description?: string;
    enabledFeatures?: ApplicationEnabledFeaturesEnum[];
    id?: string;
    instances?: Instance[];
    kind?: string;
    lastUpdatedTimestamp?: string;
    leaderboardCount?: number;
    name?: string;
    themeColor?: string;
}
