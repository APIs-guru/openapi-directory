import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1StorageInfoDiskVolume
/** 
 * Information for disk volumes
**/
export class GoogleChromeManagementV1StorageInfoDiskVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storageFreeBytes" })
  storageFreeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=storageTotalBytes" })
  storageTotalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
