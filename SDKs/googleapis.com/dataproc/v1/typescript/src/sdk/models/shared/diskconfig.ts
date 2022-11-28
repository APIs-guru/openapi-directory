import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskConfig
/** 
 * Specifies the config of disk options for a group of VM instances.
**/
export class DiskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=bootDiskType" })
  bootDiskType?: string;

  @SpeakeasyMetadata({ data: "json, name=localSsdInterface" })
  localSsdInterface?: string;

  @SpeakeasyMetadata({ data: "json, name=numLocalSsds" })
  numLocalSsds?: number;
}
