package shared

type GetPodcastsInBatchForm struct {
	Ids                *string `form:"name=ids"`
	ItunesIds          *string `form:"name=itunes_ids"`
	NextEpisodePubDate *int64  `form:"name=next_episode_pub_date"`
	Rsses              *string `form:"name=rsses"`
	ShowLatestEpisodes *int64  `form:"name=show_latest_episodes"`
}
