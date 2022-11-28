import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFrameImageUint16PathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameImageUint16QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdFramesFrameImageUint16Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFramesFrameImageUint16Request extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameImageUint16PathParams;
    queryParams: GetInstancesIdFramesFrameImageUint16QueryParams;
    headers: GetInstancesIdFramesFrameImageUint16Headers;
}
export declare class GetInstancesIdFramesFrameImageUint16Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
