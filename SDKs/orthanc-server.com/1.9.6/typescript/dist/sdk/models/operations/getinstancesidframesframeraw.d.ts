import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFrameRawPathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameRawRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameRawPathParams;
}
export declare class GetInstancesIdFramesFrameRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
