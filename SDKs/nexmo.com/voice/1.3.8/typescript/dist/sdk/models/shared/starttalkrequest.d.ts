import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
import { VoiceNameEnum } from "./voicenameenum";
export declare class StartTalkRequest extends SpeakeasyBase {
    language?: LanguageEnum;
    level?: string;
    loop?: number;
    style?: number;
    text: string;
    voiceName?: VoiceNameEnum;
}
