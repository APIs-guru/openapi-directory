import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateProjectRequest
/** 
 * Request to create a script project. Request to create a script project.
**/
export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
