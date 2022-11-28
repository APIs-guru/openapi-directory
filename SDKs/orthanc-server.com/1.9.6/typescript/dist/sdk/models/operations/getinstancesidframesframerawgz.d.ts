import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFrameRawGzPathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameRawGzRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameRawGzPathParams;
}
export declare class GetInstancesIdFramesFrameRawGzResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
