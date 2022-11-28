import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EpisodeMinimum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_edit_url" })
  listennotesEditUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=maybe_audio_invalid" })
  maybeAudioInvalid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
