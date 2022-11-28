import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED",
    Mulaw = "MULAW",
    Mp3 = "MP3",
    Ogg = "OGG"
}


// GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings
/** 
 * Settings for exporting audio.
**/
export class GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioExportPattern" })
  audioExportPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=audioFormat" })
  audioFormat?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=enableAudioRedaction" })
  enableAudioRedaction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;
}
