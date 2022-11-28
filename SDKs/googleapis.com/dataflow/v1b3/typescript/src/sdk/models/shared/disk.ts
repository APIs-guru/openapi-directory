import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Disk
/** 
 * Describes the data disk used by a workflow job.
**/
export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;
}
