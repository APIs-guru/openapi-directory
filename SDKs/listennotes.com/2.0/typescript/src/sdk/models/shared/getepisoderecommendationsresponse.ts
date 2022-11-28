import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";



export class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: EpisodeSimple })
  recommendations: EpisodeSimple[];
}
