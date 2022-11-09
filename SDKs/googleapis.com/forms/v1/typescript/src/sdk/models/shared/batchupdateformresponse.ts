import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Form } from "./form";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";


// BatchUpdateFormResponse
/** 
 * Response to a BatchUpdateFormRequest.
**/
export class BatchUpdateFormResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=form" })
  form?: Form;

  @Metadata({ data: "json, name=replies", elemType: shared.Response })
  replies?: Response[];

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
