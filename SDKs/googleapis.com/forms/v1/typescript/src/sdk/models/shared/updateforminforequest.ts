import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfoInput } from "./info";



// UpdateFormInfoRequestInput
/** 
 * Update Form's Info.
**/
export class UpdateFormInfoRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: InfoInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
