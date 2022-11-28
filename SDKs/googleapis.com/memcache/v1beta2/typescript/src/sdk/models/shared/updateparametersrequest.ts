import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParametersInput } from "./memcacheparameters";



// UpdateParametersRequestInput
/** 
 * Request for UpdateParameters.
**/
export class UpdateParametersRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: MemcacheParametersInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
