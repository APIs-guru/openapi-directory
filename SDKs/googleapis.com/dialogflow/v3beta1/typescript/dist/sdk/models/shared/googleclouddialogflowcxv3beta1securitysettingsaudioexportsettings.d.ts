import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED",
    Mulaw = "MULAW",
    Mp3 = "MP3",
    Ogg = "OGG"
}
/**
 * Settings for exporting audio.
**/
export declare class GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings extends SpeakeasyBase {
    audioExportPattern?: string;
    audioFormat?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum;
    enableAudioRedaction?: boolean;
    gcsBucket?: string;
}
