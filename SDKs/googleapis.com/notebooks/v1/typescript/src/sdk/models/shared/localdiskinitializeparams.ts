import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocalDiskInitializeParamsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED"
,    PdStandard = "PD_STANDARD"
,    PdSsd = "PD_SSD"
,    PdBalanced = "PD_BALANCED"
,    PdExtreme = "PD_EXTREME"
}


// LocalDiskInitializeParams
/** 
 * Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
**/
export class LocalDiskInitializeParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diskName" })
  diskName?: string;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=diskType" })
  diskType?: LocalDiskInitializeParamsDiskTypeEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
