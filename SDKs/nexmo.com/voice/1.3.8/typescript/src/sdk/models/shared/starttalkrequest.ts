import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageEnum } from "./languageenum";
import { VoiceNameEnum } from "./voicenameenum";


export class StartTalkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: LanguageEnum;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=loop" })
  loop?: number;

  @Metadata({ data: "json, name=style" })
  style?: number;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=voice_name" })
  voiceName?: VoiceNameEnum;
}
