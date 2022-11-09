import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdFramesFrameMatlabPathParams extends SpeakeasyBase {
    frame: number;
    id: string;
}
export declare class GetInstancesIdFramesFrameMatlabRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFramesFrameMatlabPathParams;
}
export declare class GetInstancesIdFramesFrameMatlabResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
