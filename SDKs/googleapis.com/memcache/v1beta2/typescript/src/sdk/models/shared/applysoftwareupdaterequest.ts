import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplySoftwareUpdateRequest
/** 
 * Request for ApplySoftwareUpdate.
**/
export class ApplySoftwareUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyAll" })
  applyAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];
}
