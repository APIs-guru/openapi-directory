import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Student } from "./student";



// ListStudentsResponse
/** 
 * Response when listing students.
**/
export class ListStudentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=students", elemType: Student })
  students?: Student[];
}
