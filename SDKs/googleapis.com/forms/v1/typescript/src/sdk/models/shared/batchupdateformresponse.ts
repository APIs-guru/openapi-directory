import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";



// BatchUpdateFormResponse
/** 
 * Response to a BatchUpdateFormRequest.
**/
export class BatchUpdateFormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: Form;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Response })
  replies?: Response[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
