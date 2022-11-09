import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1StorageInfoDiskVolume
/** 
 * Information for disk volumes
**/
export class GoogleChromeManagementV1StorageInfoDiskVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=storageFreeBytes" })
  storageFreeBytes?: string;

  @Metadata({ data: "json, name=storageTotalBytes" })
  storageTotalBytes?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
