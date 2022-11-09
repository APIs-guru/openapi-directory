import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PodcastExtraField extends SpeakeasyBase {
  @Metadata({ data: "json, name=facebook_handle" })
  facebookHandle?: string;

  @Metadata({ data: "json, name=google_url" })
  googleUrl?: string;

  @Metadata({ data: "json, name=instagram_handle" })
  instagramHandle?: string;

  @Metadata({ data: "json, name=linkedin_url" })
  linkedinUrl?: string;

  @Metadata({ data: "json, name=patreon_handle" })
  patreonHandle?: string;

  @Metadata({ data: "json, name=spotify_url" })
  spotifyUrl?: string;

  @Metadata({ data: "json, name=twitter_handle" })
  twitterHandle?: string;

  @Metadata({ data: "json, name=url1" })
  url1?: string;

  @Metadata({ data: "json, name=url2" })
  url2?: string;

  @Metadata({ data: "json, name=url3" })
  url3?: string;

  @Metadata({ data: "json, name=wechat_handle" })
  wechatHandle?: string;

  @Metadata({ data: "json, name=youtube_url" })
  youtubeUrl?: string;
}
