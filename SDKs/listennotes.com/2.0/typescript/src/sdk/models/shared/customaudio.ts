import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomAudio
/** 
 * A custom audio in a playlist, which is a type of playlist item.
**/
export class CustomAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
