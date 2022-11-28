import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1DiskInfo
/** 
 * Status of the single storage device.
**/
export class GoogleChromeManagementV1DiskInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesReadThisSession" })
  bytesReadThisSession?: string;

  @SpeakeasyMetadata({ data: "json, name=bytesWrittenThisSession" })
  bytesWrittenThisSession?: string;

  @SpeakeasyMetadata({ data: "json, name=discardTimeThisSession" })
  discardTimeThisSession?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: string;

  @SpeakeasyMetadata({ data: "json, name=ioTimeThisSession" })
  ioTimeThisSession?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=readTimeThisSession" })
  readTimeThisSession?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeIds" })
  volumeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=writeTimeThisSession" })
  writeTimeThisSession?: string;
}
