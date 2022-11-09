import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Disk
/** 
 * Describes the data disk used by a workflow job.
**/
export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;
}
