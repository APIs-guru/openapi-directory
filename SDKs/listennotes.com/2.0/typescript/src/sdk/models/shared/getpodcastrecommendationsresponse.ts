import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";



export class GetPodcastRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: PodcastSimple })
  recommendations: PodcastSimple[];
}
