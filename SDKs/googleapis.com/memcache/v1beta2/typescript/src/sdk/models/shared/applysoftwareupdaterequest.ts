import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplySoftwareUpdateRequest
/** 
 * Request for ApplySoftwareUpdate.
**/
export class ApplySoftwareUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyAll" })
  applyAll?: boolean;

  @Metadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];
}
