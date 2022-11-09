import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskConfig
/** 
 * Specifies the config of disk options for a group of VM instances.
**/
export class DiskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @Metadata({ data: "json, name=bootDiskType" })
  bootDiskType?: string;

  @Metadata({ data: "json, name=localSsdInterface" })
  localSsdInterface?: string;

  @Metadata({ data: "json, name=numLocalSsds" })
  numLocalSsds?: number;
}
