import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EpisodeSimple } from "./episodesimple";


export class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendations", elemType: shared.EpisodeSimple })
  recommendations: EpisodeSimple[];
}
