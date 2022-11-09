import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Teacher } from "./teacher";


// ListTeachersResponse
/** 
 * Response when listing teachers.
**/
export class ListTeachersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=teachers", elemType: shared.Teacher })
  teachers?: Teacher[];
}
