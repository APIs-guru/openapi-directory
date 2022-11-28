import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCameraSensePathParams extends SpeakeasyBase {
    serial: string;
}
/**
 * The details of the audio detection config.
**/
export declare class UpdateDeviceCameraSenseRequestBodyAudioDetection extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateDeviceCameraSenseRequestBody extends SpeakeasyBase {
    audioDetection?: UpdateDeviceCameraSenseRequestBodyAudioDetection;
    detectionModelId?: string;
    mqttBrokerId?: string;
    senseEnabled?: boolean;
}
export declare class UpdateDeviceCameraSenseRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCameraSensePathParams;
    request?: UpdateDeviceCameraSenseRequestBody;
}
export declare class UpdateDeviceCameraSenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
