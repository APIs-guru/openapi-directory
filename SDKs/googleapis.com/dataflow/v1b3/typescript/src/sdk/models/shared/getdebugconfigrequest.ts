import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDebugConfigRequest
/** 
 * Request to get updated debug configuration for component.
**/
export class GetDebugConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentId" })
  componentId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
