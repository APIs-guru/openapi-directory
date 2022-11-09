import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFolder } from "./drivefolder";


// Assignment
/** 
 * Additional details for assignments.
**/
export class Assignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=studentWorkFolder" })
  studentWorkFolder?: DriveFolder;
}
