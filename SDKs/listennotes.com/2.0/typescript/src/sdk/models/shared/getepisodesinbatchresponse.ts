import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EpisodeSimple } from "./episodesimple";


export class GetEpisodesInBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=episodes", elemType: shared.EpisodeSimple })
  episodes: EpisodeSimple[];
}
