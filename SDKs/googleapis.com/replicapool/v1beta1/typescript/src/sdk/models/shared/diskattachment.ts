import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskAttachment
/** 
 * Specifies how to attach a disk to a Replica.
**/
export class DiskAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;
}
