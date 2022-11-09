import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED"
,    Mulaw = "MULAW"
,    Mp3 = "MP3"
,    Ogg = "OGG"
}


// GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings
/** 
 * Settings for exporting audio.
**/
export class GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioExportPattern" })
  audioExportPattern?: string;

  @Metadata({ data: "json, name=audioFormat" })
  audioFormat?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum;

  @Metadata({ data: "json, name=enableAudioRedaction" })
  enableAudioRedaction?: boolean;

  @Metadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;
}
