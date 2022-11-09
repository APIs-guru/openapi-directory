import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExportFlavorEnum {
    Linux = "Linux"
,    Windows = "Windows"
}

export enum ExportPlatformEnum {
    CoreMl = "CoreML"
,    TensorFlow = "TensorFlow"
,    DockerFile = "DockerFile"
,    Onnx = "ONNX"
}

export enum ExportStatusEnum {
    Exporting = "Exporting"
,    Failed = "Failed"
,    Done = "Done"
}


export class Export extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=flavor" })
  flavor?: ExportFlavorEnum;

  @Metadata({ data: "json, name=newerVersionAvailable" })
  newerVersionAvailable?: boolean;

  @Metadata({ data: "json, name=platform" })
  platform?: ExportPlatformEnum;

  @Metadata({ data: "json, name=status" })
  status?: ExportStatusEnum;
}
