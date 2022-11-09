import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


export class DiscoveryclustersClustersBannerWithContentContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fillColorArgb" })
  fillColorArgb?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=maskColorArgb" })
  maskColorArgb?: string;

  @Metadata({ data: "json, name=moreButtonText" })
  moreButtonText?: string;

  @Metadata({ data: "json, name=moreButtonUrl" })
  moreButtonUrl?: string;

  @Metadata({ data: "json, name=textColorArgb" })
  textColorArgb?: string;
}


export class DiscoveryclustersClusters extends SpeakeasyBase {
  @Metadata({ data: "json, name=banner_with_content_container" })
  bannerWithContentContainer?: DiscoveryclustersClustersBannerWithContentContainer;

  @Metadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=totalVolumes" })
  totalVolumes?: number;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}


export class Discoveryclusters extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.DiscoveryclustersClusters })
  clusters?: DiscoveryclustersClusters[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=totalClusters" })
  totalClusters?: number;
}
