import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFramePreviewPathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFramePreviewQueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdFramesFramePreviewHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFramesFramePreviewRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFramePreviewPathParams;
    queryParams: GetInstancesIdFramesFramePreviewQueryParams;
    headers: GetInstancesIdFramesFramePreviewHeaders;
}
export declare class GetInstancesIdFramesFramePreviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
