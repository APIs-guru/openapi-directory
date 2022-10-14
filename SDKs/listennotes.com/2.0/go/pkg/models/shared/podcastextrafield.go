package shared

type PodcastExtraField struct {
	FacebookHandle  *string `json:"facebook_handle,omitempty"`
	GoogleURL       *string `json:"google_url,omitempty"`
	InstagramHandle *string `json:"instagram_handle,omitempty"`
	LinkedinURL     *string `json:"linkedin_url,omitempty"`
	PatreonHandle   *string `json:"patreon_handle,omitempty"`
	SpotifyURL      *string `json:"spotify_url,omitempty"`
	TwitterHandle   *string `json:"twitter_handle,omitempty"`
	Url1            *string `json:"url1,omitempty"`
	Url2            *string `json:"url2,omitempty"`
	Url3            *string `json:"url3,omitempty"`
	WechatHandle    *string `json:"wechat_handle,omitempty"`
	YoutubeURL      *string `json:"youtube_url,omitempty"`
}
