import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomAudio
/** 
 * A custom audio in a playlist, which is a type of playlist item.
**/
export class CustomAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
