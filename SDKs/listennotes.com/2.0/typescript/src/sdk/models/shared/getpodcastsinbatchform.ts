import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPodcastsInBatchForm extends SpeakeasyBase {
  @Metadata({ data: "form, name=ids;" })
  ids?: string;

  @Metadata({ data: "form, name=itunes_ids;" })
  itunesIds?: string;

  @Metadata({ data: "form, name=next_episode_pub_date;" })
  nextEpisodePubDate?: number;

  @Metadata({ data: "form, name=rsses;" })
  rsses?: string;

  @Metadata({ data: "form, name=show_latest_episodes;" })
  showLatestEpisodes?: number;
}
