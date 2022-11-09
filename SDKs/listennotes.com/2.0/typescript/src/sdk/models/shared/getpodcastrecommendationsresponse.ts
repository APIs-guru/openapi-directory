import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PodcastSimple } from "./podcastsimple";


export class GetPodcastRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendations", elemType: shared.PodcastSimple })
  recommendations: PodcastSimple[];
}
