import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExportPlatformEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow"
}

export enum ExportStatusEnum {
    Exporting = "Exporting",
    Failed = "Failed",
    Done = "Done"
}


export class Export extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DownloadUri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: ExportPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ExportStatusEnum;
}
