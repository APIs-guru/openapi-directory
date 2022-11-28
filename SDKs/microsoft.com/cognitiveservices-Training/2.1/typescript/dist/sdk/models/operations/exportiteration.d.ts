import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare enum ExportIterationFlavorEnum {
    Linux = "Linux",
    Windows = "Windows"
}
export declare enum ExportIterationPlatformEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX"
}
export declare class ExportIterationQueryParams extends SpeakeasyBase {
    flavor?: ExportIterationFlavorEnum;
    platform: ExportIterationPlatformEnum;
}
export declare class ExportIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class ExportIterationRequest extends SpeakeasyBase {
    pathParams: ExportIterationPathParams;
    queryParams: ExportIterationQueryParams;
    headers: ExportIterationHeaders;
}
export declare class ExportIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    export?: shared.Export;
    statusCode: number;
}
