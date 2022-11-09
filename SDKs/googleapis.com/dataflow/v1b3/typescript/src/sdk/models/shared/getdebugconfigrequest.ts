import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDebugConfigRequest
/** 
 * Request to get updated debug configuration for component.
**/
export class GetDebugConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentId" })
  componentId?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
