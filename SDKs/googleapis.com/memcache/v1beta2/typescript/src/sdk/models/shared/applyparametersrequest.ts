import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplyParametersRequest
/** 
 * Request for ApplyParameters.
**/
export class ApplyParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyAll" })
  applyAll?: boolean;

  @Metadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];
}
