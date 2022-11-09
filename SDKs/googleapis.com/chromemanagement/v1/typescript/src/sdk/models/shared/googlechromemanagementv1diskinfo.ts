import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1DiskInfo
/** 
 * Status of the single storage device.
**/
export class GoogleChromeManagementV1DiskInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesReadThisSession" })
  bytesReadThisSession?: string;

  @Metadata({ data: "json, name=bytesWrittenThisSession" })
  bytesWrittenThisSession?: string;

  @Metadata({ data: "json, name=discardTimeThisSession" })
  discardTimeThisSession?: string;

  @Metadata({ data: "json, name=health" })
  health?: string;

  @Metadata({ data: "json, name=ioTimeThisSession" })
  ioTimeThisSession?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=readTimeThisSession" })
  readTimeThisSession?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=volumeIds" })
  volumeIds?: string[];

  @Metadata({ data: "json, name=writeTimeThisSession" })
  writeTimeThisSession?: string;
}
