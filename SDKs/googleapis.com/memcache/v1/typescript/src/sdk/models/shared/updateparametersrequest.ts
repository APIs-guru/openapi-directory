import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemcacheParameters } from "./memcacheparameters";


// UpdateParametersRequest
/** 
 * Request for UpdateParameters.
**/
export class UpdateParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: MemcacheParameters;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
