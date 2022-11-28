import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplyParametersRequest
/** 
 * Request for ApplyParameters.
**/
export class ApplyParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyAll" })
  applyAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];
}
