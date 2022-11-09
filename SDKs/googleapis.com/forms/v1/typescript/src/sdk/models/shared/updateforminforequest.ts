import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Info } from "./info";


// UpdateFormInfoRequest
/** 
 * Update Form's Info.
**/
export class UpdateFormInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: Info;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
