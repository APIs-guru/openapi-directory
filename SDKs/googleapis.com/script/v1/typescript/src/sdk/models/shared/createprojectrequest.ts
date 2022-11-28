import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateProjectRequest
/** 
 * Request to create a script project. Request to create a script project.
**/
export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
