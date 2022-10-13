package shared

type PodcastExtraField struct {
	FacebookHandle  *string `json:"facebook_handle"`
	GoogleURL       *string `json:"google_url"`
	InstagramHandle *string `json:"instagram_handle"`
	LinkedinURL     *string `json:"linkedin_url"`
	PatreonHandle   *string `json:"patreon_handle"`
	SpotifyURL      *string `json:"spotify_url"`
	TwitterHandle   *string `json:"twitter_handle"`
	Url1            *string `json:"url1"`
	Url2            *string `json:"url2"`
	Url3            *string `json:"url3"`
	WechatHandle    *string `json:"wechat_handle"`
	YoutubeURL      *string `json:"youtube_url"`
}
