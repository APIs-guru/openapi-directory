import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
import { VoiceNameEnum } from "./voicenameenum";



export class StartTalkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: LanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=loop" })
  loop?: number;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=voice_name" })
  voiceName?: VoiceNameEnum;
}
