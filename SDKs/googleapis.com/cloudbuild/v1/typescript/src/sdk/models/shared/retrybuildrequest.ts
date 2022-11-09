import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryBuildRequest
/** 
 * Specifies a build to retry.
**/
export class RetryBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
