import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveDataRef
/** 
 * A reference to the data of a drive attachment.
**/
export class DriveDataRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFileId" })
  driveFileId?: string;
}
