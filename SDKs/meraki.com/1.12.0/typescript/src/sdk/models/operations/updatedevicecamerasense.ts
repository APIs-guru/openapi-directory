import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCameraSensePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceCameraSenseRequestBodyAudioDetection
/** 
 * The details of the audio detection config.
**/
export class UpdateDeviceCameraSenseRequestBodyAudioDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateDeviceCameraSenseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioDetection" })
  audioDetection?: UpdateDeviceCameraSenseRequestBodyAudioDetection;

  @Metadata({ data: "json, name=detectionModelId" })
  detectionModelId?: string;

  @Metadata({ data: "json, name=mqttBrokerId" })
  mqttBrokerId?: string;

  @Metadata({ data: "json, name=senseEnabled" })
  senseEnabled?: boolean;
}


export class UpdateDeviceCameraSenseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCameraSensePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraSenseRequestBody;
}


export class UpdateDeviceCameraSenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
