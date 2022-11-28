import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Teacher } from "./teacher";



// ListTeachersResponse
/** 
 * Response when listing teachers.
**/
export class ListTeachersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=teachers", elemType: Teacher })
  teachers?: Teacher[];
}
