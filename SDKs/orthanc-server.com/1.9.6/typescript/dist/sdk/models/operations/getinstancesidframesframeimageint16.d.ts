import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFrameImageInt16PathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameImageInt16QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdFramesFrameImageInt16Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFramesFrameImageInt16Request extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameImageInt16PathParams;
    queryParams: GetInstancesIdFramesFrameImageInt16QueryParams;
    headers: GetInstancesIdFramesFrameImageInt16Headers;
}
export declare class GetInstancesIdFramesFrameImageInt16Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
