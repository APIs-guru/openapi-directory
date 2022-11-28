import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportPlatformEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow"
}
export declare enum ExportStatusEnum {
    Exporting = "Exporting",
    Failed = "Failed",
    Done = "Done"
}
export declare class Export extends SpeakeasyBase {
    downloadUri?: string;
    platform?: ExportPlatformEnum;
    status?: ExportStatusEnum;
}
