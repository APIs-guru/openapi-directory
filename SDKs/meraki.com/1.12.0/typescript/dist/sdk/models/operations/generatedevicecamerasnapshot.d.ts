import { SpeakeasyBase } from "../../../internal/utils";
export declare class GenerateDeviceCameraSnapshotPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GenerateDeviceCameraSnapshotRequestBody extends SpeakeasyBase {
    fullframe?: boolean;
    timestamp?: Date;
}
export declare class GenerateDeviceCameraSnapshotRequest extends SpeakeasyBase {
    pathParams: GenerateDeviceCameraSnapshotPathParams;
    request?: GenerateDeviceCameraSnapshotRequestBody;
}
export declare class GenerateDeviceCameraSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    generateDeviceCameraSnapshot202ApplicationJsonObject?: Map<string, any>;
}
