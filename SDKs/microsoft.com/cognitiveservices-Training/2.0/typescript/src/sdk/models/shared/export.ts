import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExportFlavorEnum {
    Linux = "Linux",
    Windows = "Windows"
}

export enum ExportPlatformEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX"
}

export enum ExportStatusEnum {
    Exporting = "Exporting",
    Failed = "Failed",
    Done = "Done"
}


export class Export extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=flavor" })
  flavor?: ExportFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: ExportPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExportStatusEnum;
}
