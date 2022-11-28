import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdFramesFramePathParams extends SpeakeasyBase {
    frame: string;
    id: string;
}
export declare class GetInstancesIdFramesFrameRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFramePathParams;
}
export declare class GetInstancesIdFramesFrameResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdFramesFrame200ApplicationJsonAny?: any;
    statusCode: number;
}
