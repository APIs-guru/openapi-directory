import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";



export class GetEpisodesInBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episodes", elemType: EpisodeSimple })
  episodes: EpisodeSimple[];
}
