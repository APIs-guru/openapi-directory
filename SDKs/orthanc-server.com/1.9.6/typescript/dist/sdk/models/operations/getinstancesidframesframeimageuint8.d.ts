import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFrameImageUint8PathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameImageUint8QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdFramesFrameImageUint8Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFramesFrameImageUint8Request extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameImageUint8PathParams;
    queryParams: GetInstancesIdFramesFrameImageUint8QueryParams;
    headers: GetInstancesIdFramesFrameImageUint8Headers;
}
export declare class GetInstancesIdFramesFrameImageUint8Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
