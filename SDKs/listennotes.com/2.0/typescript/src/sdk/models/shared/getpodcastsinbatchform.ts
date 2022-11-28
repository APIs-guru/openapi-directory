import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPodcastsInBatchForm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ids;" })
  ids?: string;

  @SpeakeasyMetadata({ data: "form, name=itunes_ids;" })
  itunesIds?: string;

  @SpeakeasyMetadata({ data: "form, name=next_episode_pub_date;" })
  nextEpisodePubDate?: number;

  @SpeakeasyMetadata({ data: "form, name=rsses;" })
  rsses?: string;

  @SpeakeasyMetadata({ data: "form, name=show_latest_episodes;" })
  showLatestEpisodes?: number;
}
