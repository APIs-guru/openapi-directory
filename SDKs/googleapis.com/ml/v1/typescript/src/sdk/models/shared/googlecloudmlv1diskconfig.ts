import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1DiskConfig
/** 
 * Represents the config of disk options.
**/
export class GoogleCloudMlV1DiskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=bootDiskType" })
  bootDiskType?: string;
}
