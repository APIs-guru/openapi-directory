import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryBuildRequest
/** 
 * Specifies a build to retry.
**/
export class RetryBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
