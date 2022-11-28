import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";



// Assignment
/** 
 * Additional details for assignments.
**/
export class Assignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studentWorkFolder" })
  studentWorkFolder?: DriveFolder;
}
