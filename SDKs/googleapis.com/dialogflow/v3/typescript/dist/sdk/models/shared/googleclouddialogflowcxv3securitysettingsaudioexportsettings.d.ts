import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED",
    Mulaw = "MULAW",
    Mp3 = "MP3",
    Ogg = "OGG"
}
/**
 * Settings for exporting audio.
**/
export declare class GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings extends SpeakeasyBase {
    audioExportPattern?: string;
    audioFormat?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum;
    enableAudioRedaction?: boolean;
    gcsBucket?: string;
}
