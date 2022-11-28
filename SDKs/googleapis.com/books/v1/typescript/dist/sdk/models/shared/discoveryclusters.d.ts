import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
export declare class DiscoveryclustersClustersBannerWithContentContainer extends SpeakeasyBase {
    fillColorArgb?: string;
    imageUrl?: string;
    maskColorArgb?: string;
    moreButtonText?: string;
    moreButtonUrl?: string;
    textColorArgb?: string;
}
export declare class DiscoveryclustersClusters extends SpeakeasyBase {
    bannerWithContentContainer?: DiscoveryclustersClustersBannerWithContentContainer;
    subTitle?: string;
    title?: string;
    totalVolumes?: number;
    uid?: string;
    volumes?: Volume[];
}
export declare class Discoveryclusters extends SpeakeasyBase {
    clusters?: DiscoveryclustersClusters[];
    kind?: string;
    totalClusters?: number;
}
