import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExportPlatformEnum {
    CoreMl = "CoreML"
,    TensorFlow = "TensorFlow"
}

export enum ExportStatusEnum {
    Exporting = "Exporting"
,    Failed = "Failed"
,    Done = "Done"
}


export class Export extends SpeakeasyBase {
  @Metadata({ data: "json, name=DownloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=Platform" })
  platform?: ExportPlatformEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ExportStatusEnum;
}
