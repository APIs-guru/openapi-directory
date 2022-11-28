import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestInput } from "./request";
import { WriteControl } from "./writecontrol";



// BatchUpdateFormRequestInput
/** 
 * A batch of updates to perform on a form. All the specified updates are made or none of them are.
**/
export class BatchUpdateFormRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeFormInResponse" })
  includeFormInResponse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: RequestInput })
  requests?: RequestInput[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
