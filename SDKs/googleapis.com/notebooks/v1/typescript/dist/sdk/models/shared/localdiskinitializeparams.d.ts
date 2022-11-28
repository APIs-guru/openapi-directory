import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocalDiskInitializeParamsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}
/**
 * Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
**/
export declare class LocalDiskInitializeParams extends SpeakeasyBase {
    description?: string;
    diskName?: string;
    diskSizeGb?: string;
    diskType?: LocalDiskInitializeParamsDiskTypeEnum;
    labels?: Map<string, string>;
}
