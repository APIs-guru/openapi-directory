import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskAttachment
/** 
 * Specifies how to attach a disk to a Replica.
**/
export class DiskAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}
