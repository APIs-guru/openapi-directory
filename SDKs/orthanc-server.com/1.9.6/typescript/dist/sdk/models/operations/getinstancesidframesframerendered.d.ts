import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdFramesFrameRenderedPathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameRenderedQueryParams extends SpeakeasyBase {
    height?: number;
    quality?: number;
    smooth?: boolean;
    width?: number;
    windowCenter?: number;
    windowWidth?: number;
}
export declare class GetInstancesIdFramesFrameRenderedHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFramesFrameRenderedRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameRenderedPathParams;
    queryParams: GetInstancesIdFramesFrameRenderedQueryParams;
    headers: GetInstancesIdFramesFrameRenderedHeaders;
}
export declare class GetInstancesIdFramesFrameRenderedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
