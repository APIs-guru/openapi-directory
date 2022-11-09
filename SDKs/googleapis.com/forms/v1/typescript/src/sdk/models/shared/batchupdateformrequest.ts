import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";


// BatchUpdateFormRequest
/** 
 * A batch of updates to perform on a form. All the specified updates are made or none of them are.
**/
export class BatchUpdateFormRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeFormInResponse" })
  includeFormInResponse?: boolean;

  @Metadata({ data: "json, name=requests", elemType: shared.Request })
  requests?: Request[];

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
