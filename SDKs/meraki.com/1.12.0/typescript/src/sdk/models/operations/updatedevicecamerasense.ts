import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCameraSensePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceCameraSenseRequestBodyAudioDetection
/** 
 * The details of the audio detection config.
**/
export class UpdateDeviceCameraSenseRequestBodyAudioDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateDeviceCameraSenseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioDetection" })
  audioDetection?: UpdateDeviceCameraSenseRequestBodyAudioDetection;

  @SpeakeasyMetadata({ data: "json, name=detectionModelId" })
  detectionModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=mqttBrokerId" })
  mqttBrokerId?: string;

  @SpeakeasyMetadata({ data: "json, name=senseEnabled" })
  senseEnabled?: boolean;
}


export class UpdateDeviceCameraSenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCameraSensePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraSenseRequestBody;
}


export class UpdateDeviceCameraSenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
