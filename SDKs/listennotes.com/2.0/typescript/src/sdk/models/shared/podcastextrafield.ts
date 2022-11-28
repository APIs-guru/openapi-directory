import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PodcastExtraField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facebook_handle" })
  facebookHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=google_url" })
  googleUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=instagram_handle" })
  instagramHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin_url" })
  linkedinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=patreon_handle" })
  patreonHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=spotify_url" })
  spotifyUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_handle" })
  twitterHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=url1" })
  url1?: string;

  @SpeakeasyMetadata({ data: "json, name=url2" })
  url2?: string;

  @SpeakeasyMetadata({ data: "json, name=url3" })
  url3?: string;

  @SpeakeasyMetadata({ data: "json, name=wechat_handle" })
  wechatHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=youtube_url" })
  youtubeUrl?: string;
}
