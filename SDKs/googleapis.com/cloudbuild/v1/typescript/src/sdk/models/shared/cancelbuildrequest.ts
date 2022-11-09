import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelBuildRequest
/** 
 * Request to cancel an ongoing build.
**/
export class CancelBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
