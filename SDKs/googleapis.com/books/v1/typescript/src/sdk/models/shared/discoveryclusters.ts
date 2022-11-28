import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



export class DiscoveryclustersClustersBannerWithContentContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fillColorArgb" })
  fillColorArgb?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=maskColorArgb" })
  maskColorArgb?: string;

  @SpeakeasyMetadata({ data: "json, name=moreButtonText" })
  moreButtonText?: string;

  @SpeakeasyMetadata({ data: "json, name=moreButtonUrl" })
  moreButtonUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=textColorArgb" })
  textColorArgb?: string;
}


export class DiscoveryclustersClusters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=banner_with_content_container" })
  bannerWithContentContainer?: DiscoveryclustersClustersBannerWithContentContainer;

  @SpeakeasyMetadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=totalVolumes" })
  totalVolumes?: number;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}


export class Discoveryclusters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: DiscoveryclustersClusters })
  clusters?: DiscoveryclustersClusters[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=totalClusters" })
  totalClusters?: number;
}
