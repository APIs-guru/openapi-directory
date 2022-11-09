import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED"
,    Mulaw = "MULAW"
,    Mp3 = "MP3"
,    Ogg = "OGG"
}


// GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings
/** 
 * Settings for exporting audio.
**/
export class GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioExportPattern" })
  audioExportPattern?: string;

  @Metadata({ data: "json, name=audioFormat" })
  audioFormat?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum;

  @Metadata({ data: "json, name=enableAudioRedaction" })
  enableAudioRedaction?: boolean;

  @Metadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;
}
