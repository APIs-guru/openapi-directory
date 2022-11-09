import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Student } from "./student";


// ListStudentsResponse
/** 
 * Response when listing students.
**/
export class ListStudentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=students", elemType: shared.Student })
  students?: Student[];
}
