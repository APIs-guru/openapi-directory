import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveDataRef
/** 
 * A reference to the data of a drive attachment.
**/
export class DriveDataRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFileId" })
  driveFileId?: string;
}
