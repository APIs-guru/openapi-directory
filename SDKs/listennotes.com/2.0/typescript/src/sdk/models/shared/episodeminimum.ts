import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EpisodeMinimum extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=listennotes_edit_url" })
  listennotesEditUrl?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=maybe_audio_invalid" })
  maybeAudioInvalid?: boolean;

  @Metadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
