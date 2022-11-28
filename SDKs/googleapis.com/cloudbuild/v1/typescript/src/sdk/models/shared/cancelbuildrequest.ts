import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelBuildRequest
/** 
 * Request to cancel an ongoing build.
**/
export class CancelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
