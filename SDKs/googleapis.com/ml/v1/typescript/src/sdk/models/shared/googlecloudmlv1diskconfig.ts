import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1DiskConfig
/** 
 * Represents the config of disk options.
**/
export class GoogleCloudMlV1DiskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @Metadata({ data: "json, name=bootDiskType" })
  bootDiskType?: string;
}
